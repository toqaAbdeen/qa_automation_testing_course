// <reference types="cypress"/>
describe('Practice lesson', () => {

    const random = Date.now() . toString() . slice(-3);
    const newUser = {
    firstName: 'Toqa_${random}',
    lastName:'Test_${random}',
    email: `CypressTest_${random}@mail.com`,
    password: 'test@123',
    confirmPassword: 'test@123'

};

    // execute before all tests, first one
    before(() => {
        cy.visit("https://demowebshop.tricentis.com/login")
        // cy.get("#Email").type("abdeentoqa97@gmail.com")
        // cy.get("#Password").type("test@123")
        // cy.get(".login-button").click()
        //  cy.fixture("UserDemoWorkShop").then((user) => {
        // cy.loginToDemoWorkShop(user.email, user.password)
        // })
                cy.loginToDemoWorkShop()

    })

    // execute before each test, second one
    beforeEach(() => {
        cy.visit("https://demowebshop.tricentis.com/login")
    })

    it("Verify that all text and  fields are present", () => {

        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get(".required").should("be.visible") // check reg form is visible, check the div with the class page and registration-page is visible
        // cy.get("#register-button").should("be.visible")
        // cy.get(".form-fields").first().children().find("input")

        cy.contains('h1', "Register").should("be.visible");
        cy.contains ('Your Personal Details').should('be.visible')
        cy.contains ('Your Password' ).should('be.visible')
        cy. contains ('Gender: ').should('be.visible')
        cy.contains ('First name:').should('be.visible')
        cy. contains ('Last name:').should('be.visible')
        cy. contains ('Email: ').should('be.visible')
        cy.contains ('Password: ').should('be.visible')
        cy.contains('Confirm password: ').should('be.visible')
        cy.get("#gender-male").should("be.visible");
        cy.get ("#gender-female").should("be.visible");
        cy.get ("#FirstName").should("be.visible");
        cy.get ("#LastName").should("be.visible");
        cy.get("#Email").should("be.visible");
        cy.get ("#Password").should("be.visible");
        cy.get("#ConfirmPassword").should("be.visible");
        cy.get('#register-button').should("be.visible");

    })

    it("Validate that the user can create a new account", () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.get("#Email").type(newUser.email).should("have.value", newUser.email);
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get ("#gender-female"). check()
        cy.get("#FirstName").type(newUser.firstName)
        cy.get ("#LastName") .type(newUser. lastName)
        cy.get("#Email").type(newUser.email)
        cy.get ("#Password").type(newUser.password)
        cy.get("#ConfirmPassword"). type(newUser. confirmPassword)
        cy.get("#register-button"). click()

        cy.get(".result") . should('contain' , 'Your registration completed' )
        cy.get("a.account"). should('contain',newUser.email)
        cy.url().should('eq','https://demowebshop.tricentis.com/registerresult/1')
            })

    it.only('Validate that the user can add a product to the cart successfully', () => {
        cy. contains('a','Books').click()
        cy.get(".item-box").contains('a','Computing and Internet' ) . parents('.details') .find("input[value='Add to cart']").click()
        cy.get('#bar-notification').should('be.visible').and('contain','The product has been added to your shopping cart')
                cy.get(".cart-qty").should('contain','1')


});

    // execute after finish execution for a each test case, third one
    afterEach(() => {})
    // execute once after finish execution all test cases, final one
    after(() => {

        cy.get('.ico-cart').first().click()
        cy.get('[name="removefromcart"]').check()
        cy.get('.update-cart-button').click()


        // use invoke to get the value of the input from the website and log it in the cypress log
        // cy.get('[name=removefromcart]').invoke('val').then((value) => {
        //     cy.log(value) // log the value of the removefromcart input field
        // })
            // usually when we delete sth we use APIs mean request/response 
        // cy.request('POST','https://demowebshop.tricentis.com/cart',{removefromcart, value}) this is json form

        // cy.request({
        //     method: 'POST',
        //     url: 'https://demowebshop.tricentis.com/cart',
        //     form: true, // this is for form data
        //     body: {
        //         removefromcart: value // this is the value of the input field we want to delete
                
        //     }
        // })






})})