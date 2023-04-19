const assert = require('assert')
const randomMailPage = require('../page/randommail.page.js')
const testMailPage = require('../page/testmail.page.js')
const mainGitPage = require('../page/maingit.page.js')
const registryPage = require('../page/registry.page.js')
const signInPage = require('../page/signin.page.js')
const userPage = require('../page/user.page.js')
const pricingPage = require('../page/pricing.page.js')
const exploreGitgPage = require('../page/exploregit.page.js')
const searchPage = require('../page/search.page.js')
const enterprisePage = require('../page/enterprise.page.js')
const careersPage = require('../page/careers.page.js')

describe('lesson 29 home work', () => {

})

xit(`Registry in to Github`, async () => {
    await browser.url(`https://github.com`);
 
    const signUpButton = $(`//header/div[1]/div[2]/div[2]/a[1]`);
    await signUpButton.click();
    await browser.pause(2000); 
    const emailField = $(`[id="email"]`);
    await emailField.click();
    await emailField.setValue(`test125@gmail.com`);
    let continueButtonMail = $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[1]/div[2]/button[1]`);
    await browser.waitUntil(() =>{
      return continueButtonMail.isClickable();
    }, 5000, 'button not clickable');     
    await continueButtonMail.click();  

    const passwordField = $(`[id="password"]`); 
    await passwordField.click();
    await passwordField.setValue(`qwe123456789asdzxc0`);
    let continueButtonPass = $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[2]/div[2]/button[1]`);
    await browser.waitUntil(() =>{
      return continueButtonPass.isClickable();
    }, 5000, 'button not clickable');     
    await continueButtonPass.click();  

    const loginField = $(`[id="login"]`); 
    await loginField.click();
    await loginField.setValue(`test125qwerty67`);
    let continueButtonLogin = $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[3]/div[2]/button[1]`);
    await browser.waitUntil(() =>{
      return continueButtonLogin.isClickable();
    }, 5000, 'button not clickable');     
    await continueButtonLogin.click();  

    const subscribeField = $(`[id="opt_in"]`); 
    await subscribeField.click();
    await subscribeField.setValue(`n`);
    let continueButtonSubscribe = $(`//body/div[4]/main[1]/div[2]/text-suggester[1]/div[1]/form[1]/div[4]/div[2]/button[1]`);
    await browser.waitUntil(() =>{
      return continueButtonSubscribe.isClickable();
    }, 5000, 'button not clickable');     
    await continueButtonSubscribe.click(); 
    await browser.pause(10000);     
   });  
    

xit('should move to registration page', async () => {
    await browser.url('https://github.com/')  
    await mainGitPage.fillEmailField();
    await browser.pause(5000);
    await mainGitPage.clickSignUpGit();
    await browser.pause(5000); 
    //value = await browser.getUrl();
    //assert(value = `https://github.com/signup?*`); //true
    await browser.pause(5000); 
    await registryPage.clickContinueButtonMail();
    await registryPage.clickPasswordField();
    await registryPage.fillPasswordField();
    await browser.pause(5000);     
    await registryPage.clickContinueButtonPass();
    await registryPage.clickLoginField();
    await registryPage.fillLoginField();
    await browser.pause(5000);
    await registryPage.clickContinueButtonLogin();
    await registryPage.clickSubscribeField();
    await registryPage.fillSubscribeField();
    await browser.pause(5000);
    await registryPage.clickContinueButtonSuscribe();
    await browser.pause(5000);
    console.log('Is displayed?:' + await registryPage.isTeDisplayed());
    await browser.pause(10000); 
    
})

xit('should move to registration page thrue footer link', async () => {
    await browser.url('https://github.com/')
    await mainGitPage.clickSignUpGitFooter();
    await browser.pause(5000); 
    value = await browser.getUrl();
    assert(value = `https://github.com/signup?*`); //true
    await browser.pause(5000); 
    await registryPage.fillEmailField();    
    await browser.pause(5000); 
    await registryPage.clickContinueButtonMail();
    await registryPage.clickPasswordField();
    await registryPage.fillPasswordField();
    await browser.pause(5000);     
    await registryPage.clickContinueButtonPass();
    await registryPage.clickLoginField();
    await registryPage.fillLoginField();
    await browser.pause(5000);
    await registryPage.clickContinueButtonLogin();
    await registryPage.clickSubscribeField();
    await registryPage.fillSubscribeField();
    await browser.pause(5000);
    await registryPage.clickContinueButtonSuscribe();
    await browser.pause(5000);
    console.log('Is displayed?:' + await registryPage.isTeDisplayed());
    await browser.pause(10000); 
    
})

xit('should Sign in', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.clickSignInGit();
  await signInPage.fillEmailField();
  await signInPage.fillPasswordField();
  await browser.pause(5000);
  await signInPage.clickSignInGit();
  await userPage.clickProfile();
  value = await userPage.getUserName();
  assert(value = testMailPage.testUserGit()); //true
  console.log('User name is:' + value);
  await browser.pause(10000);   
  
})

xit('should chek forgot password page', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.clickSignInGit();
  await signInPage.clickForgotPassword();
  await browser.pause(5000);  
  console.log('Is displayed?:' + await registryPage.isTeDisplayed());
  await browser.pause(5000);
  value = await browser.getUrl();
  
  assert.equal(value, `https://github.com/password_reset`); //true  
  await browser.pause(10000);   
  
})
xit('should chek dropdown menu', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.moveToProduct();
  await browser.pause(5000);
  console.log('Is displayed?:' + await mainGitPage.isProductMenuDisplayed());
  await browser.pause(1000);
  await mainGitPage.moveToExplore();
  await browser.pause(5000);
  console.log('Is displayed?:' + await mainGitPage.isExploreMenuDisplayed());
  await mainGitPage.moveToPricing();
  await browser.pause(5000);
  console.log('Is displayed?:' + await mainGitPage.isPricingMenuDisplayed());
  await browser.pause(10000);   
  
})

xit('should chek pricing plan', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.moveToPricing();
  await browser.pause(5000);
  await mainGitPage.moveToPricingPlans();
  await mainGitPage.clickPricingPlans();
  await pricingPage.clickFreePlan();
  await pricingPage.fillLoginField();
  await pricingPage.fillEmailField();
  await pricingPage.fillPasswordField();
  await pricingPage.clickCheckbox();  
  await browser.pause(10000);   
  
})
xit('should chek explore Git', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.moveToExplore();
  await browser.pause(5000);
  await mainGitPage.moveToExploreGit();
  await mainGitPage.clickExploreGit();
  await exploreGitgPage.moveToTopics();
  await exploreGitgPage.clickTopics();
  await browser.pause(5000);
  console.log('Is displayed?:' + await exploreGitgPage.isLabelDisplayed());    
  await browser.pause(10000);   
  
})

xit('should chek searching', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.clickSearch();
  await browser.pause(5000);
  await mainGitPage.search.setValue('webdriverio');
  await browser.keys(	"Enter");
  await browser.pause(5000);
  await searchPage.clickTypeScriptButton();
  await browser.pause(5000);
  await searchPage.clickFirstResult();
  await browser.pause(2000);
  value = await browser.getUrl();
  if (value.search('/webdriverio') != -1) {
      console.log('true')
     } else {
      console.log('false')
  }    
  await browser.pause(10000);  
  
})

it('should chek enterprise', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.clickTrialEnterprise();
  await browser.pause(5000);
  await mainGitPage.clickEnterpriseCloud();
  await pricingPage.fillLoginField();
  await pricingPage.fillEmailField();
  await pricingPage.fillPasswordField();
  await pricingPage.clickCheckbox();
  await browser.pause(5000);
  await browser.back();
  await mainGitPage.clickEnterpriseServer();
  await enterprisePage.fillNameField();
  await enterprisePage.fillCompanyField();
  await enterprisePage.fillEmailField();
  await enterprisePage.clickAwsButton();
  await browser.pause(1000);
  await enterprisePage.clickAzureButton();
  await browser.pause(1000);
  await enterprisePage.clickGcpButton();
  await browser.pause(1000);
  await enterprisePage.clickOwnServerButton();
  await browser.pause(1000);
  await enterprisePage.clickNotSureButton();
  await browser.pause(1000);
  await enterprisePage.clickYesButton();
  await browser.pause(1000);
  await enterprisePage.clickCheckbox();
  await browser.pause(1000);
  await enterprisePage.fillQuestionField();
  await browser.pause(10000);   
    
})

it('should chek careers', async () => {
  await browser.url('https://github.com/')
  await mainGitPage.clickCareersButton();
  await browser.pause(1000);
  await careersPage.clickOpenPositions();
  await browser.pause(1000);  
  console.log('Is displayed?:' + await careersPage.listPositions());// show position id & quantity
  await browser.pause(10000); 
    
  
})
