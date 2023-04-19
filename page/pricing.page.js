const randommailPage = require("./randommail.page");

class PricingPage {
    
    get freePlan() {
        return $(`[test_selector="plan-input-free"]`);
    }
    
    get loginField() {
        return $(`[id="user_login"]`);
    }

    get emailField() {
        return $(`[id="user_email"]`);
    }

    get passwordField() {
        return $(`[id="user_password"]`);
    }
    
    get checkbox() {
        return $(`[id="all_emails"]`);
    }    
    
    clickFreePlan () {
        this.freePlan.click()
    }

    clickCheckbox () {
        this.checkbox.click()
    }

    fillLoginField () {
        this.loginField.setValue(randommailPage.randomUser())
    }

    fillEmailField () {
        this.emailField.setValue(randommailPage.randomEmail())
    }    
    
    fillPasswordField () {
        this.passwordField.setValue(randommailPage.randomPassword())
    }

    
}

module.exports = new PricingPage()