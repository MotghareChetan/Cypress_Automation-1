describe("Handling Tabs",()=>{
    it("Aproach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get(".example a").invoke("removeAttr",'target').click();
        cy.url().should('eq',"https://the-internet.herokuapp.com/windows/new")
    })

    it("Aproach 2",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get(".example a").then((getUrl)=>{
            let url = getUrl.prop("href");
            cy.visit(url);
        })
        cy.url().should('eq',"https://the-internet.herokuapp.com/windows/new")
    })
})