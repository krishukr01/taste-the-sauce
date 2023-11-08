import 'cypress-map'
chai.use(require('chai-sorted'))
describe('sorted price', () => {
  beforeEach(() => {
    cy.visit('/inventory.html')
  })
  it('sort item in ascending order', () => {
    cy.get('.product_sort_container').select('lohi')
    cy.get('.inventory_item_price')
      .map('innerText')
      .mapInvoke('slice', 1)
      .map(Number)
      .should('be.ascending')
  })
  it('sort item in descending order', () => {
    cy.get('.product_sort_container').select('hilo')
    cy.get('.inventory_item_price')
      .map('innerText')
      .mapInvoke('slice', 1)
      .map(Number)
      .should('be.descending')
  })
})
