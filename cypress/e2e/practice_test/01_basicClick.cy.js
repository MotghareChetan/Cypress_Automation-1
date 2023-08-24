



describe('Login Flow', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
    it('Verify that a user can successfully log in with valid credentials', () => {
        cy.title().should('eq', 'Swag Labs'); 
        cy.get("#user-name").clear();
        cy.get("#user-name").type("standard_user");

        cy.get("#password").clear();
        cy.get("#password").type("secret_sauce");

        cy.get("#login-button").click();
        cy.get(".bm-burger-button").click();
        cy.get("#logout_sidebar_link").contains("Logout");

    });

    it("Invalid Login Attempt",()=>{
        cy.get("#user-name").clear();
        cy.get("#user-name").type("locked_out_user");

        cy.get("#password").clear();
        cy.get("#password").type("secret_sauce");

        cy.get("#login-button").click();
        cy.get("h3[data-test='error']").contains("Epic sadface: Sorry, this user has been locked out.");
    })
    


});



