import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("The user open the website", () => {
  cy.visit("https://demowebshop.tricentis.com/login");
});

When("The user types {string} in email input field", (email) => {
  cy.get("#Email").type(email);
});

When("The user types {string} in password input field", (password) => {
  cy.get("#Password").type(password);
});

When("The user clicks on login button", () => {
  cy.get(".login-button").click();
});

Then("{string} should be login successfully and redirected to home page", (email) => {
  cy.url().should("eq", "https://demowebshop.tricentis.com/");
  cy.get(".account").should("contain", email);
});