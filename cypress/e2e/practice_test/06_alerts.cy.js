describe("Alerts", () => {
    //no need to handle alert it automatically get closed by Cypress
    it("Simple Aler", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsAlert()']").click();
        cy.get('#result').should("contain", "You successfully clicked an alert");

    })

    it("Confirm-cancel alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:alert", (text) => {
            expect(text).to.contain("I am a JS Confirm");
        })
        cy.wait(1000)
        //  cy.get('#result').should("contain", "Ok");


        // cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm", () => false);
        cy.get('#result').should("contain", "Cancel");
    })

    it.only("prompt alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((alertWin) => {
            cy.stub(alertWin, 'prompt').returns("TestAlert")
        })

        cy.get("button[onclick='jsPrompt()']").click();
        cy.on("window:alert", (text) => {
            expect(text).to.contain("I am a JS prompt");
        })
        cy.wait(1000)
        cy.get('#result').should("contain", "TestAlert");
    })
})