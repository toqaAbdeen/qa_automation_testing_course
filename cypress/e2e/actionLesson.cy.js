/// <reference types="cypress"/>
describe('Check actions lesson', () => { // scenario name
    it('Click Command', () => { // test case title
        cy.visit("http://127.0.0.1:5500/actionsLesson.html") 
        cy.get("#btn1").click() // find the element with the id btn1 and click it click the center of the element by default
        cy.get("#btn2").click("top") // find the element with the id btn2 and click it on the top of the element
        cy.get(".btn").click() // find the element with the class btn and click it, this will click the first element with the class btn btn class for five buttons
        // so the operation can not execute on the other buttons, to click on all the buttons we can use each loop
        cy.get(".btn").click({ multiple: true }) // find all the elements with the class btn and click them, this will click all the elements with the class btn
        cy.get("#btn0").click({ force: true }) // use force: true cause btn0 covered by another element
    })

    it("Type Command", () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html") 
        cy.get("[placeholder='Type your name']").type("Toqa") // use type command to type in the input field with the placeholder "Type your name" to write "Toqa"
        cy.get("[placeholder='Type your name']").type("Toqa{home}") // move the cursor to the beginning of the input field and type "Toqa"
        cy.get("[placeholder='Type your name']").type("Toqa{del}") // move the cursor to the end of the input field and type "Toqa" and then delete the first character of the input field
        cy.get("[placeholder='Type your name']").type("Toqa{pageup}") // move the cursor to the end of the input field and type "Toqa" and then move the cursor to the beginning of the input field
        // some seq of keys can not work in cypress like {enter} and {tab} because they are used to control the flow of the test and they can cause some issues in the test execution, so we can use {enter} to submit a form but we can not use it to move to the next input field
        // to solve it the web must support this sequence of keys and handle it in the code, for example if we want to use {enter} to move to the next input field we can add an event listener to the input field that listens to the keydown event and check if the key is enter and then move the focus to the next input field

        cy.get("#myTextField").type("{pageDown}") // move the cursor to the end of the input field and type "Toqa" and then move the cursor down to the next line in the same input field
        cy.pause() // pause the test execution to see the result of the previous command, to resume the test execution we can click on the play button in the cypress test runner or we can use the command cy.resume() to resume the test execution
        cy.get("[placeholder='Type your name']").type("{pageup}") // move the cursor to the end of the input field and type "Toqa" and then move the cursor up to the previous line in the same input field
        // cy.get("[name='input_0']").type("Toqa")
    })

    it("Select Command", () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html") 
        cy.get("#country").select("Jordan") // find the select element with the id country and select the option with the text Jordan
        cy.get("#country").select("eygpt_country") // find the select element with the id country and select the option with the value eygpt_country
        cy.get("#country").select(2) // find the select element with the id country and select the option with the index 2, the index starts with 0 so this will select the third option in the select element
        cy.get("#county").find("option").last().should("be.selected") // find the select element with the id county and find the first option in the select element and assert that it is selected, this will check that the first option in the select element is selected by default
    
    })


    it("Check and uncheck Commands", () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#Banana").check() // find the checkbox with the id Banana and check it
        cy.get("[name=snack4]").check().uncheck() // find all the checkboxes with the class checkbox and check them
        cy.get("#Banana").uncheck() // find the checkbox with the id checkbox1 and uncheck it
        cy.get("[type=checkbox]").check(["Banana","Fries","le"]) // find all the checkboxes with the type checkbox and check the checkboxes with the value Banana, Fries and le
        cy.get("#checkMe").check({ force: true }) // find the checkbox with the id checkMe and check it, this will work even if the checkbox is hidden or disabled because we are using force: true
        cy.get("#developer").check() // find the radio button with the id developer and check it
        // in radio buttons we can not uncheck the radio button because it is designed to allow only one option to be selected at a time, so if we want to uncheck a radio button we need to check another radio button in the same group, for example if we have two radio buttons with the name
        cy.get("#tester").check() // find the radio button with the id tester and check it, this will uncheck the radio button with the id developer because they are in the same group of radio buttons with the name job_role
        // or we can reload the page to uncheck all the radio buttons using cy.reload() command

    })

    it("focus and blur Commands", () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#myTextField").focus() // find the input field with the id myTextField and focus on it
        cy.get("#myTextField").blur() // find the input field with the id myTextField and blur it, this will remove the focus from the input field
        // can make blur without focus but it will not work because the blur command is designed to remove the focus from an element, so if the element is not focused it will not do anything, but if we want to make blur without focus we can use force: true to force the blur command to execute even if the element is not focused
})

    it("Trigger Command", () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#trigger_btn").trigger("mouseover") // find the element with the id trigger_btn and trigger the mouseover event on it, this will change the background color of the element to red
        cy.pause()
         cy.get("#trigger_btn").trigger("mouseout")
         get("#btn1").trigger("mousedown") // same to click command but it will trigger the mousedown event on the element instead of the click event, this will change the background color of the element to blue

    })  
    it.only("double-click Command", () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#dblClick").dblclick()

    })


})