describe("Market Movers and losers commom list", () => {

    let strongBuyCompanies;
    let strongSellCompanies;

    it("Compare Market Movers and Market Losers", () => {
        cy.fixture("urls.json").then((urls) => {
            cy.visit(urls.marketMoverUrl);
        });

        cy.captureCompanyData(".stretch-gZJAyxim>.table-Ngq2xrcG>tbody", "Strong Buy", (data) => {
            strongBuyCompanies = data;
            cy.log("Strong Buy Companies Data:", strongBuyCompanies);
            expect(strongBuyCompanies.size).to.be.greaterThan(0);
        });

        cy.wait(1000);

        cy.clickOnTab("Biggest losers");

        cy.captureCompanyData(".stretch-gZJAyxim>.table-Ngq2xrcG", "Strong Sell", (data) => {
            strongSellCompanies = data;
            cy.log("Strong Buy Companies Data:", strongSellCompanies);
            expect(strongSellCompanies.size).to.be.greaterThan(0);
        });

        //cy.compareCompanies(strongBuyCompanies,strongSellCompanies);
        cy.compareMaps(strongBuyCompanies, strongSellCompanies);
    })

})