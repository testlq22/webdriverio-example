
const randomMailPage = require('../page/randommail.page.js')
const testMailPage = require('../page/testmail.page.js')

class MainGitPage {    

    get emailField() {
        return $(`[id="user_email"]`);
    }

    get signUpGit() {
        return $(`[class="btn-mktg width-full width-sm-auto btn-signup-mktg"]`);
    }

    get signUpGitFooter() {
        return $(`[href="/signup?ref_cta=Sign+up+for+GitHub&ref_loc=footer+launchpad&ref_page=%2F"]`);
    }
    
    get signInGit() {
        return $(`[href="/login"]`);
    }
    
    get product() {
        return $(`//summary[normalize-space()='Product']`);
    }

    get productMenu() {
        return $(`(//div[@class='dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4'])[1]`);
    }
    
    get explore() {
        return $(`//summary[normalize-space()='Explore']`);
    }

    get exploreMenu() {
        return $(`(//div[@class='dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4'])[2]`);
    }
    
    get pricing() {
        return $(`//summary[normalize-space()='Pricing']`);
    }

    get pricingMenu() {
        return $(`(//div[@class='dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4'])[3]`);
    }
    get pricingPlans() {
        return $(`//a[normalize-space()='Plans']`);
    }

    get exploreGit() {
        return $(`[href="/explore"]`);
    }

    get search() {
        return $(`[data-test-selector="nav-search-input"]`);
    }
    get trialEnterprise() {
        return $(`[data-test-selector="start-trial-button"]`);
    }

    get enterpriseCloud() {
        return $(`//h2[normalize-space()='Enterprise Cloud']`);
    }

    get enterpriseServer() {
        return $(`//h2[normalize-space()='Enterprise Server']`);
    }

    get careersButton() {
        return $(`[href="/about/careers"]`);
    }

    clickEmailField () {
        this.emailField.click()
    }

    clickSignUpGit () {
        this.signUpGit.click()
    }

    clickSignUpGitFooter () {
        this.signUpGitFooter.click()
    }

    clickSignInGit () {
        this.signInGit.click()
    }
    clickPricingPlans () {
        this.pricingPlans.click()
    }

    clickExploreGit () {
        this.exploreGit.click()
    }

    clickSearch () {
        this.search.click()
    }

    clickTrialEnterprise () {
        this.trialEnterprise.click()
    }
    
    clickEnterpriseCloud () {
        this.enterpriseCloud.click()
    }

    clickEnterpriseServer () {
        this.enterpriseServer.click()
    }

    clickCareersButton () {
        this.careersButton.click()
    }

    fillEmailField () {
        this.emailField.setValue(testMailPage.testEmail())
    }
    moveToProduct () {
        this.product.moveTo();
    }    

    isProductMenuDisplayed () {
       return this.productMenu.isDisplayed()
    }
    moveToExplore () {
        this.explore.moveTo();
    }    

    isExploreMenuDisplayed () {
       return this.exploreMenu.isDisplayed()
    }

    moveToPricing () {
        this.pricing.moveTo();
    }    

    isPricingMenuDisplayed () {
       return this.pricingMenu.isDisplayed()
    }

    moveToPricingPlans () {
        this.pricingPlans.moveTo();
    }
    moveToExploreGit () {
        this.exploreGit.moveTo();
    }


    
}

module.exports = new MainGitPage()