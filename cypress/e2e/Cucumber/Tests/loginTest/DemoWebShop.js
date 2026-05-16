import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAction from "../../../PagrObjects/loginTest/Actions.cy.js";
import LoginAssertions from "../../../PagrObjects/loginTest/Assertions.cy.js";


const loginAction = new LoginAction();
const loginAssertions = new LoginAssertions();


Given("The user open the website", () => {
  // cy.visit("https://demowebshop.tricentis.com/login");
  loginAction.openLoginPage();
});

When("The user types {string} in email input field", (email) => {
  // cy.get("#Email").type(email);
  loginAction.typeEmail(email);
});

When("The user types {string} in password input field", (password) => {
  // cy.get("#Password").type(password);
  loginAction.typePassword(password);
});

When("The user clicks on login button", () => {
  // cy.get(".login-button").click();
  loginAction.clickLoginButton();
});

Then("{string} should be login successfully and redirected to home page", (email) => {
  // cy.url().should("eq", "https://demowebshop.tricentis.com/");
  // cy.get(".account").should("contain", email);
  loginAssertions.checkURLIsCorrect().checkAccountIsContainsEmail(email); // chain the assertions together, we can do this cause we use return this in the assertion methods
});