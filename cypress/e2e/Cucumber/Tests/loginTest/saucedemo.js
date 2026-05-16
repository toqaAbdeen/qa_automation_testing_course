import { Given, When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  // Runs before each scenario
  cy.log("Starting a new scenario");
});
Before({tags:"@TC-01 or @TC-02"},() => {
  // Runs before each scenario
  cy.log("Starting a new scenario with tag TC-01");
});

Before({tags:"@TC-01 and @test"},() => {
  // Runs before each scenario
  cy.log("Starting a new scenario with tag TC-01 and test");
});
Given("I open the login page", () => {
  cy.visit("/");
});

When("I enter {string} username and {string} password", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Then("I should be logged in successfully", () => {
  cy.url().should("include", "/inventory.html");
});