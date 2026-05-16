@loginTest.feature
Feature: Login functionality

    @validLogin @focus @TC-01 @test
    Scenario: Valid login
        Given I open the login page
        When I enter "standard_user" username and "secret_sauce" password
        Then I should be logged in successfully

    @invalidLogin @TC-02 @test
    Scenario: Invalid login
        Given I open the login page
        When I enter invalid username and password
        And I click the login button

        Then I should see an error message

#Add more scenarios as needed, prefer 5 at most for better readability and maintainability