// <reference types="cypress" />
import { LoginPage } from "../pages/login.page";
import { CustomerPage } from "../pages/newCustomer.page";
import { faker } from "@faker-js/faker";
import { CustomerRegSuccessPage } from "../pages/customerRegistrationSuccess.page";

var name = faker.name.fullName();
var date = faker.date
  .birthdate({ min: 1900, max: 2000, mode: "year" })
  .toISOString()
  .substring(0, 10);
var address = faker.address.streetAddress();
var city = faker.address.city();
var state = faker.address.state();
var pin = faker.datatype.number({ min: 100000 }).toString();
var mobileNumber = faker.phone.number("501######");
var email = faker.internet.email();
var password = faker.internet.password();

describe("Add a new customer with all the neccessary information", () => {
  const customerPage = new CustomerPage();
  const customerRegSuccess = new CustomerRegSuccessPage();
  before(() => new LoginPage().login()); // This runs before all tests in the describe block so that we don't login again and again.

  it("Add a new customer", () => {
    customerPage.clickOnNewCustomer();
    customerPage.fillCustomerName(name);
    customerPage.selectGender();
    customerPage.fillDateOfBirth(date);
    customerPage.fillAddress(address);
    customerPage.fillCity(city);
    customerPage.fillState(state);
    customerPage.fillPin(pin);
    customerPage.fillMobileNumber(mobileNumber);
    customerPage.fillEmail(email);
    customerPage.fillPassword(password);
    customerPage.clickSubmitButton();
  });
  /**
   *
   */
  it("Verify newly created customer data added correctly", () => {
    customerRegSuccess.verifySucessMessage();
    customerRegSuccess.verifyCustomerName(name);
    customerRegSuccess.verifyGender();
    customerRegSuccess.verifyDateOfBirth(date);
    customerRegSuccess.verifyAddress(address);
    customerRegSuccess.verifyCity(city);
    customerRegSuccess.verifyState(state);
    customerRegSuccess.verifyPin(pin);
    customerRegSuccess.verifyMobileNumber(mobileNumber);
    customerRegSuccess.verifyEmail(email);
  });

  //it("Click on checkout button", () => {});
  /**
   *
   */
  //it("Add a new address, fill in the address form", () => {});
  /**
   *
   */
});
