export class CustomerRegSuccessPage {
  verifySucessMessage() {
    cy.wait(2000)
      .get(".heading3")
      .invoke("text")
      .should("contain", "Customer Registered Successfully!!!");
  }

  verifyCustomerName(name: string) {
    cy.get("tr:nth-child(5) > td:nth-child(2)")
      .invoke("text")
      .should("contain", name);
  }

  verifyGender() {
    cy.get("tr:nth-child(6) > td:nth-child(2)")
      .invoke("text")
      .should("contain", "male");
  }

  verifyDateOfBirth(dob: string) {
    cy.get("tr:nth-child(7) > td:nth-child(2)")
      .invoke("text")
      .should("contain", dob);
  }

  verifyAddress(address: string) {
    cy.get("tr:nth-child(8) > td:nth-child(2)")
      .invoke("text")
      .should("contain", address);
  }

  verifyCity(city: string) {
    cy.get("tr:nth-child(9) > td:nth-child(2)")
      .invoke("text")
      .should("contain", city);
  }

  verifyState(state: string) {
    cy.get("tr:nth-child(10) > td:nth-child(2)")
      .invoke("text")
      .should("contain", state);
  }

  verifyPin(pin: string) {
    cy.get("tr:nth-child(11) > td:nth-child(2)")
      .invoke("text")
      .should("contain", pin);
  }

  verifyMobileNumber(mobileNumber: string) {
    cy.get("tr:nth-child(12) > td:nth-child(2)")
      .invoke("text")
      .should("contain", mobileNumber);
  }

  verifyEmail(email: string) {
    cy.get("tr:nth-child(13) > td:nth-child(2)")
      .invoke("text")
      .should("contain", email);
  }
}
