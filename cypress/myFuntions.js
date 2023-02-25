export function logowanie() {
    cy.visit('https://mystore-testlab.coderslab.pl/index.php?controller=my-account')
    cy.get('[id="field-email"]').type('gerrybutler@mail.com')
    cy.get('[id="field-password"]').type('Pass1234')
    cy.get('[id="submit-login"]').click()
};

export function logowaniedwa(user, password) {
    cy.visit('https://mystore-testlab.coderslab.pl/index.php?controller=my-account')
    cy.get('[id="field-email"]').type(user)
    cy.get('[id="field-password"]').type(password)
    cy.get('[id="submit-login"]').click()
    cy.get('.account > .hidden-sm-down').should('have.text', 'Gerry Butler')
};

export function zakup() {
    cy.visit('https://mystore-testlab.coderslab.pl/index.php')
    cy.contains('Hummingbird printed sweater').click()
    cy.get('select[id="group_1"]').select('2').should('have.value', '2')
    cy.get('.bootstrap-touchspin-up > .material-icons').click()
    cy.get('[id="quantity_wanted"]').type('{selectall}').clear().type('5')
    cy.get('.add > .btn').click()
    cy.get('.cart-content-btn > .btn-primary').click()
    cy.get('.js-cart-line-product-quantity').should('have.value', '5')
    cy.get('.size > .value').should('have.text', 'M')
    cy.get('.text-sm-center > .btn').click()
    cy.get('.address').should('have.text', 'Gerry ButlerProsta 23Szczecin70-250United Kingdom666777444')
    cy.get('.clearfix > .btn').click()
    cy.get('#js-delivery > .continue').click()
    cy.get('#payment-option-1').click()
    cy.get('[type="checkbox"]').check()
    cy.get('.ps-shown-by-js > .btn').click()
}