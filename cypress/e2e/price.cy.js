import 'cypress-map'

describe('prices', () => {
  it('conform the item with lowest price', () => {
    cy.visit('/inventory.html')
    cy.get('.inventory_list')
      .should('be.visible')
      .find('.inventory_item_price')
      .should('have.length.greaterThan', 3)
      .map('innerText')
      .mapInvoke('slice', 1)
      .map(Number)
      .apply(Cypress._.min)
      .should('equal', 7.99)
  })
})
