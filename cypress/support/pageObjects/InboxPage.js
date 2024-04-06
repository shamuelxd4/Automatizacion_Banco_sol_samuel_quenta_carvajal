class InboxPage {
  visit() {
    cy.visit('https://todo.ly/');
    cy.get('.HPHeaderLogin > a > img').click()
    cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com')
    cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4')
    cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click()

  }

  clickInbox() {
    cy.get('#ItemId_0 > .ProjItemTable > tbody > tr > .FilterItemContent').click();
  }

  createMessage(message) {
    this.clickInbox();
    cy.get('#NewItemContentInput').type(message);
    cy.get('#NewItemAddButton').click();
  }

  updateMessage(existingMessageText, updatedMessageText) {
    this.clickInbox();
    cy.contains('.ItemContentDiv', existingMessageText)
      .parents('.ProjItemTable')
      .find('.ItemMenu')
      .click({ force: true }); // Forzar el clic en el menú de opciones
    cy.get('#itemContextMenu > :nth-child(1) > a').click()
    // Forzar la limpieza y escritura del nuevo mensaje
    cy.get('#ItemEditTextbox').clear({ force: true }).type(updatedMessageText, { force: true });
    cy.get('.ItemContentDiv > #ItemEditDiv > #ItemEditSubmit').click()
  }


  deleteMessage(messageText) {
    this.clickInbox();
    cy.contains('.ItemContentDiv', 'Mensaje actualizado', { timeout: 10000 }).should('be.visible').then(() => {
      cy.get('.ItemContentDiv')
        .parents('.ProjItemTable')
        .find('.ItemMenu') // Buscar el menú dentro 
        .click({ force: true }); // Realizar clic en el menú (forzado si es necesario)
      cy.contains('Delete').click({ force: true }); // Realizar clic en "Delete" (forzado si es necesario)
    });
  }

}

export default InboxPage;
