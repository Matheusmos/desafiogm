/// <reference types="cypress" />

const url = 'http://localhost:3000'

describe('Validação de Tamanho', () => {
    
    it('visitar página', () => {
        cy.visit(url)
        
    })

    it('Tamanho Original', () => {
        cy.get('.square').invoke('width').should('equal', 90)
        cy.get('.square').invoke('height').should('equal', 90)
    })

    it('Long click', () => {

        cy.get('.square').trigger('pointerdown', {button: 0}).wait(500)
        cy.get('.square').trigger('pointerleave', {button: 0})
    })

    it('Tamanho Final', () =>{
        cy.get('.expand').invoke('width').should('equal', 225)
        cy.get('.expand').invoke('height').should('equal', 225)
    })
})