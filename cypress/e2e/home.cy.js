describe('login page', () => {
  it('visit the store', () => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.location('pathname').should('equal', '/v1/inventory.html')

    cy.get('.inventory_list')
      .should('be.visible')
      .find('.inventory_item')
      .should('have.length.greaterThan', 3)
  })
})
