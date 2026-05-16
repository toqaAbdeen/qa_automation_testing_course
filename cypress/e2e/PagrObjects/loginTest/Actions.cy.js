class LoginAction{

    openLoginPage(){
    cy.visit("https://demowebshop.tricentis.com/login");
    return this; // return this to allow method chaining
    }
    typeEmail(email){
        cy.get("#Email").type(email);
        return this; // return this to allow method chaining
    }
    typePassword(password){
        cy.get("#Password").type(password);
        return this; // return this to allow method chaining
    }
    clickLoginButton(){
        cy.get(".login-button").click();
        return this; // return this to allow method chaining
    }
}

export default LoginAction; // export to be able to import