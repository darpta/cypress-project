Cypress.Commands.add('logging', (username, password) => {
    cy.visit('http://mystore-testlab.coderslab.pl/index.php?controller=my-account')
    cy.get('[id="field-email"]').type(username)
    //cy.get('#username').type(username)
    cy.get('[id="field-password"]').type(password)
   //cy.get('#password').type(password)
    cy.get('[id="submit-login"]').click()
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