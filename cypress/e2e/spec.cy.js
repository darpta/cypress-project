/// <reference types="Cypress" />

const { addNewItem } = require("../support/utils")

describe('ToDo App', () => {
  beforeEach('', () => {
    cy.visit('')
  })
  context('When page initially loaded', () => {
    it('header of the page should be visible and have proper name', () => {
      cy.get('.header h1').should('be.visible').and('contain.text', 'todos')
    })
    it('input should have proper placeholder', () => {
      cy.get('input').should('have.attr', 'placeholder', 'What needs to be done?')
    })
  })
  
  context('When added new item', () => {
    it('should be added only one item', () => {
      cy.get('input.new-todo').type('Hello!{enter}')
      cy.get('.todo-list li').should('have.length', 1)
    })
    it('should add 3 items with proper order', () => {
      const firstItem = 'first Item'
      const secondItem = 'second Item'
      const thirdItem = 'third Item'
      const fourthItem = 'fourth Item'

      addNewItem(firstItem)
      //addNewItem === cy.get('input.new-todo').type(firstItem).type('{enter}')
      addNewItem(secondItem)
      addNewItem(thirdItem)
      addNewItem(fourthItem)

      cy.get('.todo-list li').eq(0).should('contain.text', firstItem)
      cy.get('.todo-list li').eq(1).should('contain.text', secondItem)
      cy.get('.todo-list li').eq(2).should('contain.text', thirdItem)
      cy.get('.todo-list li').eq(3).should('contain.text', fourthItem)
    })
  })
})

//context('', () => {})
//it('', () => {})
/*
context('', () => {
  it('', () => {
  })
})
*/