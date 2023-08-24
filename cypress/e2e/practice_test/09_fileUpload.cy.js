describe("FileUpload Download",()=>{


    it("FileUpload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").selectFile("C:/Users/Appmetry/Project/Cypress_Automation/package.json")
        cy.get("#file-submit").click();
    })

    it.only("Droping File",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        //cy.get("#file-upload").selectFile("C:/Users/Appmetry/Project/Cypress_Automation/package.json")
        cy.document().selectFile('C:/Users/Appmetry/Project/Cypress_Automation/package.json', { action: 'drag-drop' })
    })
})