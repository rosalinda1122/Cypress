class LoginPage {
    constructor() {
        this.url = "https://www.edu.goit.global/account/login/";
        this.email = 'input[class= "next-v891b4 eteu1jj2"]';
        this.password = 'input[type="password"]';
        this.loginButton = 'button[type="submit"]';

    }
    visit () {
        cy.visit(this.url);
    }

    loginUser(email, password) {
        cy.get(this.email, { timeout:5000 })
        .type(email) 
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }
}

export default new loginPage();