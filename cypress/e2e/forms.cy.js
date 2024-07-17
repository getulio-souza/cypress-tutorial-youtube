describe('form tests', ()=>{
    beforeEach(()=> {
        cy.visit('/forms')
    })

    it('Test subscribe form', ()=> {
        //check if we are in the correct page
        cy.contains(/testing forms/i)
        //using alias to shorter the piece of code you wanna target 
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('getuliosouza8@gmail.com')
        cy.contains(/Successfully subbed: getuliosouza8@gmail.com/i).should('not.exist')
        cy.getDataTest('subscribe-btn').click()
        cy.contains(/Successfully subbed: getuliosouza8@gmail.com/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: getuliosouza8@gmail.com/i).should('not.exist')

        cy.get('@subscribe-input').type('getuliosouza8@gmail.io')
        cy.getDataTest('subscribe-btn').click()
        cy.contains(/invalid email: getuliosouza8@gmail.io/i).should('exist')
    })
})