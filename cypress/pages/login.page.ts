import "cypress-localstorage-commands";

export class LoginPage {
  restoreLogin() {
    throw new Error("Method not implemented.");
  }

  fillUserID(userID: string) {
    cy.get("input[name='uid']").clear().type(userID);
  }

  fillPassword(password: string) {
    cy.get("input[name='password']").clear().type(password);
  }

  clickLoginButton() {
    cy.get("input[value='LOGIN']").click({
      force: true,
    });
  }

  verifyLogin() {
    cy.get("tr[class='heading3'] td").contains(Cypress.env("userID"));
  }

  // This is called by various tests to gain a logged in session.
  login() {
    cy.restoreLogin(); // Restore any login session (if any) so we don't have to login again.
    // Login again if no saved session.
    if (!(window as any).authToken) {
      cy.log("No login session found. Performing Login steps...");
      cy.visit(Cypress.env("baseUrl"));
      this.fillUserID(Cypress.env("userID"));
      this.fillPassword(Cypress.env("loginPassword"));
      this.clickLoginButton();
      this.verifyLogin();

      // Remember the auth token globally so subsequent test cases do not need to login again.
      cy.saveLogin();
    }
  }
}
