describe("Hooks", () => {
    before("Login", () => {
        cy.log("***Login***")
    })

    after("Logout", () => {
        cy.log("***Logout***")
    })

    beforeEach("clear", () => {
        cy.log("**clear data**")
    })

    afterEach("aftereach", () => {
        cy.log("after each")
    })

    it("HOMEPAGE", () => {
        cy.log("Home page")
    })

    it("CART PAGE", () => {
        cy.log("CART PAGE")
    }
    )

    it("CHECKOUT", () => {
        cy.log("Checkout")
    })
})