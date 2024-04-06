describe('Cerrar Sesión', () => {
    const LogoutPage = require('../../support/pageObjects/LogoutPage');
  
    it('Cerrar sesión correctamente', () => {
      LogoutPage.visit();
      LogoutPage.logout();
    });
  });
  