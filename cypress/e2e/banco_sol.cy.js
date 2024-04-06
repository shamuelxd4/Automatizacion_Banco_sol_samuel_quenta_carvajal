// ===== USUARIO CREADO - INBOX Y MANEJO
describe('Pagina principal - registrar nuevo usuario', () => {

    // LOGIN ====== 1ER REQUISITO
    it('Ir al registro de usuario', () => {
        cy.visit('https://todo.ly/')
        cy.get('.HPHeaderLogin > a > img').click()
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
        cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click()

        // click para ingresar al sitio web 
        cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()
    })

    // Register (Sign Up Free) ==== 2do requisito
    // it('Ir al registro de usuario', () => {
    //     cy.visit('https://todo.ly/')
    //     cy.get('.HPHeaderSignup > a > img').click()

    //     // nombre completo
    //     cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName').type('roberto quispe')
        
    //     // correo
    //     cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail').type('robertolopes78@gmail.com')
        
    //     // password
    //     cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword').type('adddddddd')

    //     // boton de checked
    //     cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms').click()

    //     //  boton amarillo de crear usuario
    //     cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup').click()

    // })






    // INBOS > CREAR========= 3ER REQUISITO
    // it('CREAR NUEVO MENSAJE', () => {
    //     cy.visit('https://todo.ly/')
    //     cy.get('.HPHeaderLogin > a > img').click()
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
    //     cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click()

    //     // click para ingresar al sitio web 
    //     cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()

    //     //==== ir a mensajeria
    //     cy.get('#ItemId_0 > .ProjItemTable > tbody > tr > .FilterItemContent').click()
    //     cy.get('#NewItemContentInput').type('nuevo mensaje 2')
    //     cy.get('#NewItemAddButton').click() // boton de registrar mensaje
    // })


    //  INBOX ACTUALIZAR - ACTUALIZAR UN MENSAJE CFREADO
    // it('IR A PAGINA CON USUARIO CREADO', () => {
    //     cy.visit('https://todo.ly/')
    //     cy.get('.HPHeaderLogin > a > img').click()
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
    //     cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click()

    //     // click para ingresar al sitio web 
    //     cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()

    //     //==== ir a mensajeria
    //     cy.get('#ItemId_0 > .ProjItemTable > tbody > tr > .FilterItemContent').click()

    //     // visibilidad
    //     cy.get('#ItemId_11280866 > .ProjItemTable > tbody > tr > .ItemContent > .ItemContentDiv').trigger('mouseover')
    //     cy.get('#ItemId_11280866 > .ProjItemTable > tbody > tr > .ItemContent > .ItemContentDiv').should('be.visible')
    //     cy.get('#ItemId_11280866 > .ProjItemTable > tbody > tr > td.ItemIndicator > .ItemIndicator > .ItemMenu').click()
    //     cy.get('#itemContextMenu > :nth-child(1) > a').click()


    //     cy.get('.ItemContentDiv > #ItemEditDiv > #ItemEditTextbox').clear()
    //     cy.get('.ItemContentDiv > #ItemEditDiv > #ItemEditTextbox').type('nuevo mensaje')
    //     cy.get('.ItemContentDiv > #ItemEditDiv > #ItemEditSubmit').click()

    // })

    // Inbox > Eliminar - ELIMINAR MENSAJE CREADO
    // it('IR A PAGINA CON USUARIO CREADO', () => {
    //     cy.visit('https://todo.ly/')
    //     cy.get('.HPHeaderLogin > a > img').click()
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
    //     cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
    //     cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click()

    //     // click para ingresar al sitio web 
    //     cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()
    //     //  eliminar la primera fila pasos:
    //     // 1ro ir a mensajeria - click para ingresar al sitio web 
    //     cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()
    //     // mover mouse y seleccionar la opcion eliminar
    //     cy.get('#ItemId_11280860 > .ProjItemTable > tbody > tr > .ItemContent > .ItemContentDiv').trigger('mouseover')
    //     cy.get('#ItemId_11280860 > .ProjItemTable > tbody > tr > .ItemContent > .ItemContentDiv').should('be.visible')
    //     cy.get('#ItemId_11280860 > .ProjItemTable > tbody > tr > td.ItemIndicator > .ItemIndicator > .ItemMenu').click()
    //     cy.get('#itemContextMenu > .delete > a').click()


    // })


    




})


