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


// ===================================== REGISTRAR USUARIO
// describe('Pagina principal - registrar nuevo usuario', () => {
//     it('Ir al registro de usuario', () => {
//         cy.visit('https://todo.ly/')
//         cy.get('.HPHeaderSignup > a > img').click()
//         cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName').type('roberto mamani')
//         cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
//         cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword').type('pruebasxd4')
//         cy.get('.HPLoginTerms').click()
//         cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup').click()
//     })   
// })


// ===== USUARIO CREADO - INBOX Y MANEJO
describe('Pagina principal - registrar nuevo usuario', () => {

    // LOGIN =================================
    // iniciar sesion de usuario
    // it('Ir al registro de usuario', () => {
    //     cy.visit('https://todo.ly/')
    //     cy.get('.HPHeaderLogin > a > img').click()
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
    //     cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click()

    //     // click para ingresar al sitio web 
    //     cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()
    // })


    // INBOS > CREAR===================
    // Iniciar sesion de usuario
    // Ir inbos para crear un mensaje
    it('IR A PAGINA CON USUARIO CREADO', () => {
        cy.visit('https://todo.ly/')
        cy.get('.HPHeaderLogin > a > img').click()
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
        cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click()

        // click para ingresar al sitio web 
        cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()

        //==== ir a mensajeria
        cy.get('#ItemId_0 > .ProjItemTable > tbody > tr > .FilterItemContent').click()
        cy.get('#NewItemContentInput').type('nuevo mensaje 1')
        cy.get('#NewItemAddButton').click() // boton de registrar mensaje
    })

    

    it('IR A PAGINA CON USUARIO CREADO', () => {
        cy.visit('https://todo.ly/')
        cy.get('.HPHeaderLogin > a > img').click()
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
        cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click()

        // click para ingresar al sitio web 
        cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()

        //==== ir a mensajeria
        cy.get('#ItemId_0 > .ProjItemTable > tbody > tr > .FilterItemContent').click()
        cy.get('#NewItemContentInput').type('nuevo mensaje 1')
        cy.get('#NewItemAddButton').click() // boton de registrar mensaje
    })


    
})


