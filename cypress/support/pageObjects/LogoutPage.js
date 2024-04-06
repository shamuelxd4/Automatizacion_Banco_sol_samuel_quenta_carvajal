
  class LogoutPage {
    visit() {
      cy.visit('https://todo.ly/');
      cy.get('.HPHeaderLogin > a > img').click();
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type('quentasamuel0@gmail.com');
      cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type('pruebasxd4');
      cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click();
    }
  
    logout() {
      // Encontrar y hacer clic en el botón de cerrar sesión
      cy.contains('Logout').click(); // Asegúrate de que el texto 'Logout' sea correcto
    }
  }
  
  export default new LogoutPage();
  