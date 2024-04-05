// inicio de prueba
// describe('Pagina principal', () => {
//     it('visitar pagina web', () => {
//         cy.visit('https://todo.ly/')
//     })
// })


// 
// describe('Boton de login', () => {
//     it('direccion al boton', () => {
//         cy.visit('https://todo.ly/')
//         cy.get('.HPHeaderLogin > a > img').click()
//     })
// })

describe('Pagina principal', () => {
    it('visitar pagina web', () => {
        cy.visit('https://todo.ly/')
        cy.get('.HPHeaderSignup > a > img').click()
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName').type('roberto mamani')
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword').type('pruebasxd4')
        cy.get('.HPLoginTerms').click()

        cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup').click()
    })

    it('visitar pagina web', () => {
        cy.visit('https://todo.ly/')
        cy.get('.HPHeaderSignup > a > img').click()
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName').type('roberto mamani')
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword').type('pruebasxd4')
        cy.get('.HPLoginTerms').click()

        cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup').click()
    })


})


