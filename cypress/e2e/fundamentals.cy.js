describe('fundamentals test', () => {

  //before each function, do this command
  beforeEach(()=> {
    // cy.visit('/fundamentals')
    cy.visit('/forms')
  })

  it('contains correct text', () => {
    // cy.visit('https://example.cypress.io')
    // cy.visit('/fundamentals')
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    
    //USING A CUSTOM COMMAND 
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
    // cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })

  //use only to run only a specify test and ignore the others
  it('accordion works correctly', () => {  // Corrected this line
    // cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})