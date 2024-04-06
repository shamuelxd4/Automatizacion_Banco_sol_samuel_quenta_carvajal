class SignUpPage {
    visit() {
      cy.visit('https://todo.ly/');
    }
  
    clickSignUpImage() {
      cy.get('.HPHeaderSignup > a > img').click();
    }
  
    fillFullName(fullName) {
      cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName').type(fullName);
    }
  
    fillEmail(email) {
      cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail').type(email);
    }
  
    fillPassword(password) {
      cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword').type(password);
    }
  
    agreeToTerms() {
      cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms').click();
    }
  
    submit() {
      cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup').click();
    }
  }
  
  export default SignUpPage;
  