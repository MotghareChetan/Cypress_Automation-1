describe("Handling Iframes",()=>{
    it("ByFrameID",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        const Iframe = cy.get("#mce_0_ifr").its('0.contentDocument.body')
                             .should('be.visible')
                             .then(cy.wrap);
        Iframe.clear().type("Handle Iframe");
        cy.get("[aria-label='Italic']").click();
        cy.get("[aria-label='Bold']").click();                     
    })
})