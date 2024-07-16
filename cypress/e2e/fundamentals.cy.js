describe('fundamentals test', () => {

  it('contains correct text', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('/fundamentals')
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })

  it('accordion works correctly', () => {  // Corrected this line
    cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })

})