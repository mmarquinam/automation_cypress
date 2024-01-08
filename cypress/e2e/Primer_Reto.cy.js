/// <reference types= "Cypress" />

require('cypress-plugin-tab')

describe ('Primer Reto ', () =>{
    it("Mi primer reto cypress ", () =>{
        
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq',"DEMOQA")
        cy.wait(1500)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()
        cy.wait(1000)

        //botón agregar

        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.get("#firstName").type("Magnolia").tab().
        type("Marquina").tab().
        type("mmm@gmail.com").tab().
        type("33").tab().
        type("2500000").tab().
        type("Sistemas")
        cy.get("#submit").should("be.visible").click()

        //Buscar Magnolia

        cy.get("#searchBox").should("be.visible").type("Magnolia")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()
        cy.wait(1000)

        //Editar campo

        cy.get("#edit-record-4").should("be.visible").click()
        cy.get("#age").should("be.visible").clear().type("34")
        cy.get("#salary").should("be.visible").clear().type("4000000")
        cy.get("#submit").should("be.visible").click()

        //Eliminar registro
        cy.wait(2000)
        cy.get("#delete-record-4").should("be.visible").click()

    }); //cierre de it
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
    
})//Cierre de describe