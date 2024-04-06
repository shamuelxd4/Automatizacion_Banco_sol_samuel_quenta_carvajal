class LoginPage {
    visit() {
      cy.visit('https://todo.ly/');
    }
  
    clickLoginImage() {
      cy.get('.HPHeaderLogin > a > img').click();
    }
  
    fillEmail(email) {
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type(email);
    }
  
    fillPassword(password) {
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type(password);
    }
  
    clickRememberMe() {
      cy.get('#ctl00_MainContent_LoginControl1_CbRemember').click();
    }
  
    submit() {
      cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click();
    }
  }
  
  export default LoginPage;
  