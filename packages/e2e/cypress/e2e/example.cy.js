import { helloWorld } from '@poc/strings'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('not.have.text', helloWorld)
  })
})