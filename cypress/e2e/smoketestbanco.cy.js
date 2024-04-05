describe('template spec', () => {

  it('validar pagina de inicio', () => {
    cy.visit('https://todo.ly/')
    // cy.get('.active > img').should('be.visible')
    // cy.get('.active > .custom > h4').contains('Online Banking')

    // login  
    cy.get('.HPHeaderLogin > a > img').click()


    // crear nueva cuenta
    // cy.get('.HPHeaderSignup > a > img').click()

  })


})