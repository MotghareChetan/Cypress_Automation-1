describe("Assertions",()=>{


    it("Implicit assertions",()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.url().should('eq',"https://www.saucedemo.com/")
        cy.url().should('contain',"saucedemo")
        cy.url().should("include","www.saucedemo")

    })

})