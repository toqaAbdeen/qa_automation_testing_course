import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("/");
});

When("I enter valid username and password", () => {
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

Then("I should be logged in successfully", () => {
  cy.url().should("include", "/inventory.html");
});