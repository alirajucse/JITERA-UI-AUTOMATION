// <reference types="cypress" />
import { LoginPage } from "../pages/login.page";
import { CustomerPage } from "../pages/newCustomer.page";
import { faker } from "@faker-js/faker";
import { CustomerRegSuccessPage } from "../pages/customerRegistrationSuccess.page";
import { getRandomValue } from "../common/utils";

var date = faker.date
  .birthdate({ min: 1900, max: 2000, mode: "year" })
  .toISOString()
  .substring(0, 10);

const [
  customerName,
  customerAddress,
  customerCity,
  customerState,
  customerPin,
  customerMobile,
  customerEmail,
  customerPassword,
] = [
  getRandomValue("name", { length: 5 }),
  getRandomValue("address", { length: 15 }),
  getRandomValue("city", { length: 8 }),
  getRandomValue("state", { length: 5 }),
  getRandomValue("pin", { length: 6 }),
  getRandomValue("mobileNumber", { length: 10 }),
  getRandomValue("email", { length: 10, domain: "@jitera.com" }),
  getRandomValue("password", { length: 10 }),
];

describe("Add a new customer with all the neccessary information", () => {
  const customerPage = new CustomerPage();
  const customerRegSuccess = new CustomerRegSuccessPage();
  before(() => new LoginPage().login()); // This runs before all tests in the describe block so that we don't login again and again.

  it("Add a new customer", () => {
    customerPage.clickOnNewCustomer();
    customerPage.fillCustomerName(customerName);
    customerPage.selectGender();
    customerPage.fillDateOfBirth(date);
    customerPage.fillAddress(customerAddress);
    customerPage.fillCity(customerCity);
    customerPage.fillState(customerState);
    customerPage.fillPin(customerPin);
    customerPage.fillMobileNumber(customerMobile);
    customerPage.fillEmail(customerEmail);
    customerPage.fillPassword(customerPassword);
    customerPage.clickSubmitButton();
  });
  /**
   *
   */
  it("Verify newly created customer data added correctly", () => {
    customerRegSuccess.verifySucessMessage();
    customerRegSuccess.verifyCustomerName(customerName);
    customerRegSuccess.verifyGender();
    customerRegSuccess.verifyDateOfBirth(date);
    customerRegSuccess.verifyAddress(customerAddress);
    customerRegSuccess.verifyCity(customerCity);
    customerRegSuccess.verifyState(customerState);
    customerRegSuccess.verifyPin(customerPin);
    customerRegSuccess.verifyMobileNumber(customerMobile);
    customerRegSuccess.verifyEmail(customerEmail);
  });

  it("Verify submission form not possible with input empty form data", () => {
    customerPage.clickOnNewCustomer();
    customerPage.clickSubmitButton();
    cy.on("window:alert", (txt) => {
      //Mocha assertions
      expect(txt).to.contains("please fill all fields");
    });
    cy.on("window:confirm", () => true);
  });
  /**
   *
   */
  it("Verify Reset button working correctly", () => {
    customerPage.fillCustomerName(customerName);
    customerPage.fillCity(customerCity);
    customerPage.fillState(customerState);
    customerPage.clickResetButton();
    cy.get("input[name='name']").should("have.value", "");
    cy.get("input[name='city']").should("have.value", "");
    cy.get("input[name='state']").should("have.value", "");
  });
  /**
   *
   */
});
