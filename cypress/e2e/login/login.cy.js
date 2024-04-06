import LoginPage from '../../support/pageObjects/LoginPage';

describe('Login functionality', () => {
  const loginPage = new LoginPage();

  it('allows a user to log in', () => {
    loginPage.visit();
    loginPage.clickLoginImage();
    loginPage.fillEmail('quentasamuel0@gmail.com');
    loginPage.fillPassword('pruebasxd4');
    loginPage.clickRememberMe();
    loginPage.submit();
    // Aquí, añade tu aserción para verificar el inicio de sesión
  });
});
