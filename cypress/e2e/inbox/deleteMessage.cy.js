import InboxPage from '../../support/pageObjects/InboxPage';

describe('Inbox Delete Message functionality', () => {
  const inboxPage = new InboxPage();

  it('allows a user to delete an existing message', () => {
    inboxPage.visit();
    inboxPage.clickInbox();
    inboxPage.deleteMessage('Mensaje actualizado');

  });
});
