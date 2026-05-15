// <reference types="cypress"/>
describe('Practice lesson - Delete product from cart', () => {

     before(() => {
        // cy.visit("https://demowebshop.tricentis.com/login")
        // cy.get("#Email").type("abdeentoqa97@gmail.com")
        // cy.get("#Password").type("test@123")
        // cy.get(".login-button").click()
        // cy.loginToDemoWorkShop("abdeentoqa97@gmail.com", "test@123")
        // cy.fixture("UserDemoWorkShop").then((user) => {
        // cy.loginToDemoWorkShop(user.email, user.password)
        // })
        cy.loginToDemoWorkShop()
        cy.request('POST', 'https://demowebshop.tricentis.com/addproducttocart/catalog/13/1/1')
    })

    it("Validate that the user can delete product from cart", () => {
        cy.get('.ico-cart').first().click()
        cy.get('[name=removefromcart]').check()
        cy.get('.update-cart-button').click()
        cy.get(".cart-qty").should('contain','0')
        cy.get('.order-summary-content').should('contain','Your Shopping Cart is empty!')

    })
})