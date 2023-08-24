describe("Dropdown", () => {
    /* it("Select Tag dropdown", () => {
         cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
         cy.get(".information.closable ~ p>select").select("India").should("have.value", "IND");
 
     })*/

    it("Dyanamic Dropwdown", () => {
        let totalSearchCount;
        cy.visit("https://www.google.co.in/")
        cy.get("[name='q']").type("Crypress plugin");

     //   cy.get('div.wM6W7d>span')

            cy.get("div.wM6W7d>span").should("have.length", 12);
            cy.get("div.wM6W7d>span").each(($el, index, $list) => {
                if ($el.text() == "crypress plugins") {
                    cy.wrap($el).click();
                }
            })

        })

    })