import SignUpPage from '../../support/pageObjects/SignUpPage';

describe('Sign Up functionality', () => {
  const signUpPage = new SignUpPage();

  it('allows a user to sign up', () => {
    signUpPage.visit();
    signUpPage.clickSignUpImage();
    signUpPage.fillFullName('samael quispe');
    signUpPage.fillEmail('samaelquispe@gmail.com');
    signUpPage.fillPassword('pruebassamaelxd4');
    signUpPage.agreeToTerms();
    signUpPage.submit();

    // Añade una aserción para verificar el registro exitoso
    // cy.contains('User created successfully').should('be.visible');
  });
});
