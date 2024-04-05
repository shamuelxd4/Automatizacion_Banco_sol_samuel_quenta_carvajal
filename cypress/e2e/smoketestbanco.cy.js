describe('template spec', () => {

  it('validar pagina de inicio', () => {
    cy.visit('https://todo.ly/')

    // login  
    cy.get('.HPHeaderLogin > a > img').click()


  })


})