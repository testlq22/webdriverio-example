
class UserPage {
    
    get profile() {
        return $(`summary[aria-label='View profile and more'] span[class='dropdown-caret']`);
    }

    get userName() {
        return $(`strong[class='css-truncate-target']`);
    }
    
    clickProfile () {
        this.profile.click()
    }

    
    getUserName () {
        this.userName.getText()
    }
    fillPasswordField () {
        this.passwordField.setValue(testMailPage.testPasswordGit())
    }

    
}

module.exports = new UserPage()