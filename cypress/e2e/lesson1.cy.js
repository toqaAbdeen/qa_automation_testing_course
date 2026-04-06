/// <reference types="cypress"/>
describe('Check login functionality - Lesson 1', () => { // scenario name 
    it('Validate that the user can login successfully using valid email and valid password', () => { // test case title
        cy.visit("/")
        cy.get("#user-name").type("standard_user") // find the username input field and type the username
        cy.get("#password").type("secret_sauce") // find the password input field and type the password
        cy.get("[name=login-button]").click() // find the login button and click it -- [] use this when the element has an attribute that is not id or class
        // cy.get(".input_error").type("standard_user") // find the error message element and type the username to it -- . use this when the element has a class that is not unique
        cy.get("input") //get number of input fields in the page based on the tag name
        cy.get("button") //get number of buttons in the page
        // cy.get(".input_error.from_error").type("standard_user") // find input using two classes -- . use this when the element has a class that is not unique -- not recommended to use more than 2 classes to find an element because it will be hard to maintain the test in the future
        // cy.get("[data-test='login button']").click() // use '' when the attribute value has a space in it 
        cy.contains("Login").click() // find the element that contains the text "Login" and click it -- use this when the element does not have a unique attribute or class and the text is unique in the page, contains not necessarily has to be an exact match, it can be a partial match also it gets the first element that contains the text
        cy.contains("h4","Login")// find the element that contains the text "Login" and is an h4 tag and click it -- use this when there are multiple elements that contain the same text but they are different tags
        cy.contains("div","Sauce Labs Backpack") // the parent element of the element stronger than the child element, it will find the div that contains the text "Sauce Labs Backpack" and click it 
        cy.get("#react-burger-menu-btn").click() // find the menu button and click it
        cy.get(".menu-item").first()
        cy.get(".menu-item").eq(1) // find the second element with the class menu-item and click it -- eq use the index of the element to find it and the index starts with 0
        cy.get(".menu-item").eq(1).prev() // find the element that is before the second element with the class menu-item and click it
        cy.get(".menu-item").eq(1).next() // find the element that is after the second element with the class menu-item and click it
        cy.get(".menu-item").last() // find the last element with the class menu-item and click it
        cy.get("a").filter(".menu-item") // find all the elements with the tag name a and filter them by the class menu-item and click it
        cy.get("a").not(".menu-item") // find all the elements with the tag name a and filter them by the class menu-item and click it
        cy.get(".pricebar").first().find("button").click() // find the first element with the class pricebar and then find the button inside it and click it
        
        cy.get(".inventory_item_price").first().parent() 
        cy.get(".inventory_item_price").first().parent(".pricebar") // find the first element with the class inventory_item_price and then find the parent element with the class pricebar and click it
        
        cy.get(".inventory_item_price").first().parents(".inventory_item").find("button").click() // find the first element with the class inventory_item_price and then find the parent element with the class inventory_item and then find the button inside it and click it
        cy.get(".inventory_item_price").first().parents() // find the first element with the class inventory_item_price and then find all the parent elements and click it, this mean all html tags that are above the element with the class inventory_item_price
        
        cy.get(".inventory_item").first().children() // find the first element with the class inventory_item and then find all its child elements
    })
})
