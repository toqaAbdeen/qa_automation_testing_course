Feature: Login functionality

    Scenario: Valid login
        Given I open the login page
        When I enter valid username and password
        Then I should be logged in successfully