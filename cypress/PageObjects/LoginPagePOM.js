class LoginPagePOM{

    setUsername(username){
        cy.get("#username").type(username);
    }

    setPassword(password){
        cy.get("#password").type(password);
    }

    clickLoginButton(){
        cy.get("#kc-login").click();
    }


}

export default LoginPagePOM;