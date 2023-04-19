
const randomMailPage = require('../page/randommail.page.js')
const testMailPage = require('../page/testmail.page.js')

class RegistryPage {
    
    get emailField() {
        return $(`[id="email"]`);
    }

    get continueButtonMail() {
        return $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[1]/div[2]/button[1]`);
    }

    get passwordField() {
        return $(`[id="password"]`);
    }

    get continueButtonPass() {
        return $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[2]/div[2]/button[1]`);
    }

    get loginField() {
        return $(`[id="login"]`);
    }

    get continueButtonLogin() {
        return $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[3]/div[2]/button[1]`);
    }

    get subscribeField(){
        return $('[id="opt_in"]')
    }
    get continueButtonSubscribe() {
        return $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[4]/div[2]/button[1]`);
    }

    get signUpGitFooter() {
        return $(`[href="/signup?ref_cta=Sign+up+for+GitHub&ref_loc=footer+launchpad&ref_page=%2F"]`);
    }

    clickEmailField () {
        this.emailField.click()
    }

    clickContinueButtonMail () {
        browser.waitUntil(() =>{
            return  this.continueButtonMail.isClickable();
          }, 5000, 'button not clickable');
        this.continueButtonMail.click()
    }

    clickPasswordField () {
        this.passwordField.click()
    }

    clickContinueButtonPass () {
        browser.waitUntil(() =>{
            return  this.continueButtonPass.isClickable();
          }, 5000, 'button not clickable');          
        this.continueButtonPass.click()
    }

    clickLoginField () {
        this.loginField.click()
    }
    clickContinueButtonLogin () {
        browser.waitUntil(() =>{
            return  this.continueButtonLogin.isClickable();
          }, 5000, 'button not clickable');          
        this.continueButtonLogin.click()
    }
    clickSubscribeField () {
        this.subscribeField.click()
    }
    clickContinueButtonSuscribe () {
        browser.waitUntil(() =>{
            return  this.continueButtonSubscribe.isClickable();
          }, 5000, 'button not clickable');          
        this.continueButtonSubscribe.click()
    }

    clickSignUpGit () {
        this.signUpGit.click()
    }

    clickSignUpGitFooter () {
        this.signUpGitFooter.click()
    }

    fillEmailField () {
        this.emailField.setValue(testMailPage.testEmail())
    }

    fillPasswordField () {
        this.passwordField.setValue(testMailPage.testEmail())
    }

    fillLoginField () {
        this.loginField.setValue(testMailPage.testUser())
    }

    fillSubscribeField () {
        this.subscribeField.setValue(testMailPage.subscribeNo())
    }
    get findText() {
        return $(`//*[contains(text(),'Verify your account')]`);
    }

    isTeDisplayed () {
       return this.findText.isDisplayed()
    }

    
}

module.exports = new RegistryPage()