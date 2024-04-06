import InboxPage from '../../support/pageObjects/InboxPage';

describe('Inbox Create Message functionality', () => {
  const inboxPage = new InboxPage();

  it('allows a user to create a new message', () => {
    inboxPage.visit();
    inboxPage.clickInbox();
    inboxPage.createMessage('Nuevo mensaje en la bandeja de entrada');

    // Añade una aserción para verificar que el mensaje se ha creado correctamente
    cy.contains('Nuevo mensaje en la bandeja de entrada').should('exist');
  });
});
