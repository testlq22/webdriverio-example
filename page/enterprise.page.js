const randommailPage = require("./randommail.page");

class EnterprisePage {

    get nameField() {
        return $(`[id="contact_request_name"]`);
    }

    get companyField() {
        return $(`[id="contact_request_organization_name"]`);
    }      

    get emailField() {
        return $(`[id="contact_request_email"`);
    }

    get awsButton() {
        return $(`label[for='contact_request_instance_type_aws']`);
    }

    get azureButton() {
        return $(`label[for='contact_request_instance_type_azure']`);
    }

    get gcpButton() {
        return $(`label[for='contact_request_instance_type_gcp']`);
    }

    get ownServerButton() {
        return $(`label[for='contact_request_instance_type_onprem']`);
    }

    get notSureButton() {
        return $(`label[for='contact_request_instance_type_not_sure']`);
    }

    get yesButton() {
        return $(`label[for='questions_yes']`);
    }
    
    get checkbox() {
        return $(`[id="contact_request_agreed_to_terms"]`);
    }

    get question() {
        return $(`[id="questions-list"]`);
    }    
    
    

    clickCheckbox () {
        this.checkbox.click()
    }

    fillNameField () {
        this.nameField.setValue(randommailPage.randomUser())
    }

    fillCompanyField () {
        this.companyField.setValue(randommailPage.randomUser())
    }
    
    fillEmailField () {
        this.emailField.setValue(randommailPage.randomEmail())
    }

    fillQuestionField () {
        this.question.setValue('To be or not to be?')
    }  

    clickAwsButton () {
        this.awsButton.click()
    }

    clickAzureButton () {
        this.azureButton.click()
    }

    clickGcpButton () {
        this.gcpButton.click()
    }

    clickOwnServerButton () {
        this.ownServerButton.click()
    }

    clickNotSureButton () {
        this.notSureButton.click()
    }

    clickYesButton () {
        this.yesButton.click()
    }
        
}

module.exports = new EnterprisePage()