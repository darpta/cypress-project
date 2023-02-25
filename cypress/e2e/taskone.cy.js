/// <reference types="Cypress" />

import { logowanie } from "../myFuntions"

describe('template spec', () => {
  it('Logging to Shop', () => {
    logowanie()

    cy.get('[id="addresses-link"]').click()
    cy.get('.addresses-footer > a > span').click()

    cy.get('[id="field-alias"]').type('Domowy')
    cy.get('[id="field-address1"]').type('Prosta 23')
    cy.get('[id="field-postcode"]').type('70-250')
    cy.get('[id="field-city"]').type('Szczecin')
    cy.get('[id="field-phone"]').type('666777444')

    cy.get('select[id="field-id_country"]').select('17').should('have.value', '17')

    cy.contains('Save').click()

    cy.contains('Delete').click()
    cy.get('.alert > ul > li').should('have.text', 'Could not delete the address since it is used in the shopping cart.')
  })
})