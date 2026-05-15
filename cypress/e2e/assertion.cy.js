// <reference types="cypress"/>
describe('Assertion lesson', () => {
    it("should command", () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html") 
        cy.get("h1").should("contain","QA Course")

        cy.get("[placeholder='Type your name']").type("Toqa") // use type command to type in the input field with the placeholder "Type your name" to write "Toqa"
        cy.get("[type=number]").type("25")
        cy.get("#country").select("Palestine") // find the select element with the id country and select the option
          cy.get("#Banana").check() // find the checkbox with the id Banana and check it
        cy.get("[name=snack4]").check().uncheck()


        cy.get("#country").find("option").first().should("be.selected") // find the select element with the id county and find the first option in the select element and assert that it is selected, this will check that the first option in the select element is selected by default
        cy.get("[type=number]").should("have.value", "25") // find the input field with the type number and assert that it has the value 25
        cy.get("#Banana").should("be.checked") // find the checkbox with the id Banana and assert that it is checked
        cy.get("[name=snack4]").should("not.be.checked") // find all the checkboxes with the class checkbox and assert that they are not checked   

        cy.get("#hiddenElement").should("exist").and("not.be.visible") // find the element with the id hiddenElement and assert that it exists and it is not visible

    })

    it("Validate that the user can open google website"),() => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html") 
        cy.pause()
        cy.get(".google").click()
        cy.url().should("eq", "https://www.google.com/")
    }

    it.only("",() => {

        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#myTextField").should("be.empty") // find the input field with the id testField and assert that it is empty
        cy.get("[placeholder='Type your name']").type("Toqa")
        cy.get("#trigger_btn").trigger("mouseover")
        cy.get("#trigger_btn").should("have.css", "background-color", "rgb(255, 255, 0)").and("be.visible").and("contain","Trigger") // find the element with the id trigger_btn and assert that it has the css property background-color with the value rgb(255, 255, 0) and assert that it is visible and it contains the text Trigger
        cy.reload()
        cy.get("[placeholder='Type your name']").should("be.empty")
        cy.get("input[name='input_0']").should("be.empty").and("be.visible")


    })
        
})