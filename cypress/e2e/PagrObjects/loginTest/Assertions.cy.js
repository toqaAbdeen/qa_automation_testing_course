class LoginAssertions {

    checkURLIsCorrect() {
         cy.url().should("eq", "https://demowebshop.tricentis.com/");
            return this; // return this to allow method chaining
    }
    checkAccountIsContainsEmail(email){
        cy.get(".account").should("contain", email);
        return this; // return this to allow method chaining
    }
    
}
export default LoginAssertions;