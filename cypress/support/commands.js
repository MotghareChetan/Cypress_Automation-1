/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add('Iframe', (iframeElem) => {
  return cy.get(iframeElem)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})


Cypress.Commands.add("captureCompanyData", (tableSelector, technicalRating, callback) => {
  let companiesData = new Map();

  cy.get(tableSelector)
    .find("tr")
    .each((row) => {
      const companyCell = row.find("td").eq(0);
      const stockPrice = row.find("td").eq(2);
      const technicalRatingCell = row.find("td").eq(4);

      const companyNameElement = companyCell.find(".tickerNameBox-GrtoTeat").text().trim();
      const stockPriceAll = stockPrice.text().trim();
      const stockPriceNumber = stockPriceAll.match(/\d+\.\d+/);
      const currentTechnicalRating = technicalRatingCell.text().trim();
      if (currentTechnicalRating === technicalRating) {
        cy.log('Company Name:', companyNameElement, 'Stock Price:', stockPriceNumber);
        companiesData.set(companyNameElement, stockPriceNumber);
      }
    })
    .then(() => {
      callback(companiesData); // Pass the captured data to the callback
    });
});

Cypress.Commands.add("clickOnTab", (tabName) => {
  cy.xpath(`//a[div[text()="${tabName}"]]`)
    .click();
});

Cypress.Commands.add("compareCompanies", (map1, map2) => {
  const commonKeysMap = new Map();

  map1.forEach((value, key) => {
    if (map2.has(key)) {
      commonKeysMap.set(key, value);
      cy.log("Common Company:", key, "Value:", value);
    }
  });
});

Cypress.Commands.add('compareMaps', (map1, map2) => {
  const similarCompanies = [];

  for (const companyName in map1) {
    if (map2.hasOwnProperty(companyName)) {
      similarCompanies.push(companyName);
    }
  }

  cy.log('Similar company names:-->', similarCompanies);
});




// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
