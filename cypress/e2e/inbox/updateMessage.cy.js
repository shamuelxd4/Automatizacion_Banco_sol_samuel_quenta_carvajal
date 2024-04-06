import InboxPage from '../../support/pageObjects/InboxPage';

describe('Inbox Update Message functionality', () => {
  const inboxPage = new InboxPage();

  it('allows a user to update an existing message', () => {
    inboxPage.visit();
    inboxPage.clickInbox();
    inboxPage.updateMessage('nuevo mensaje 1', 'Mensaje actualizado');

  });
});
