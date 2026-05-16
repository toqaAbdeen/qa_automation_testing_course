Feature: Check login functionality
    # @TC-0000 @test
    # Scenario: testing
    # Given The user open the website


    Scenario Outline: validate that the user can login successfully
        Given The user open the website
        When The user types <email> in email input field
        And The user types <password> in password input field
        And The user clicks on login button
        Then <email> should be login successfully and redirected to home page

        Examples:
            | email                           | password       |
            | "eng.razanBalatiah96@gmail.com" | "test@123"     |
            | "sallybassam97@gmail.com"       | "sallytest123" |
            | "abdeentoqa97@gmail.com"        | "test@123"     |

