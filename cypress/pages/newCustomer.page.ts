export class CustomerPage {
  clickOnNewCustomer() {
    //cy.wait(3000); // Wait until captcha loaded.
    cy.get("a[href='addcustomerpage.php']").click({
      force: true,
    });
  }

  fillCustomerName(customerName: string) {
    cy.get("input[name='name']").clear().type(customerName);
  }

  selectGender() {
    //cy.wait(3000); // Wait until captcha loaded.
    cy.get("input[value='m']").click({
      force: true,
    });
  }

  fillDateOfBirth(dob: string) {
    cy.get("#dob").clear().type(dob);
  }

  fillAddress(address: string) {
    cy.get("textarea[name='addr']").clear().type(address);
  }

  fillCity(city: string) {
    cy.get("input[name='city']").clear().type(city);
  }

  fillState(state: string) {
    cy.get("input[name='state']").clear().type(state);
  }

  fillPin(pin: string) {
    cy.get("input[name='pinno']").clear().type(pin);
  }

  fillMobileNumber(mobileNumber: string) {
    cy.get("input[name='telephoneno']").clear().type(mobileNumber);
  }

  fillEmail(email: string) {
    cy.get("input[name='emailid']").clear().type(email);
  }

  fillPassword(password: string) {
    cy.get("input[name='password']").clear().type(password);
  }

  clickSubmitButton() {
    //cy.wait(3000); // Wait until captcha loaded.
    cy.get("input[value='Submit']").click({
      force: true,
    });
  }
}
