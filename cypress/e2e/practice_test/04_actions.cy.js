describe("Button Click", () => {
    beforeEach("Visit Website", () => {
        cy.visit("https://demoqa.com/");
        cy.xpath("(//div[@class='category-cards']//div[1])[1]").click();
    })
    it("Webelement click", () => {
       
        cy.xpath("(//ul[@class='menu-list']//li)[1]").click();

        //fill form
        cy.get('#userName').type("TEST USER");
        cy.get('#userEmail').type("test@user.com");
        cy.get('.col-md-9 > #currentAddress').type("Test address");
        cy.get('.col-md-9 > #permanentAddress').type("test permanant address");
        cy.get('#submit').click();

    })

})