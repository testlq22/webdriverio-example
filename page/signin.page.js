const randomMailPage = require('../page/randommail.page.js')
const testMailPage = require('../page/testmail.page.js')

class SignInPage {
    
    get emailField() {
        return $(`[id="login_field"]`);
    }

    get passwordField() {
        return $(`[id="password"]`);
    }
        
    get signInGit() {
        return $(`input[value='Sign in']`);
    }

    get forgotPassword() {
        return $(`[href="/password_reset"]`);
    }

    clickEmailField () {
        this.emailField.click()
    }

    clickPasswordField () {
        this.passwordField.click()
    }
    
    clickSignInGit () {
        this.signInGit.click()
    }
    clickForgotPassword () {
        this.forgotPassword.click()
    }

    fillEmailField () {
        this.emailField.setValue(testMailPage.testEmailGit())
    }
    fillPasswordField () {
        this.passwordField.setValue(testMailPage.testPasswordGit())
    }

    
}

module.exports = new SignInPage()