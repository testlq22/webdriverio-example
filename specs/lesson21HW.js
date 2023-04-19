const assert = require('assert')

describe('lesson 21 home work', () => {

})

xit(`Sign in to Github with not valid credentials`, async () => {
    await browser.url(`https://github.com`);
    await browser.waitUntil(() =>{
        return $('[href="/login"]').isDisplayed();
      }, 5000, 'Sign In is not displayed');
    const signInButton = $(`[href="/login"]`);
    await signInButton.click();
    await browser.pause(2000); 
    const loginField = $(`[id="login_field"]`);
    const passwordField = $(`[id="password"]`);
    const loginButton = $(`[type="submit"]`);
    await loginField.click();
    await browser.pause(2000);
    await passwordField.click();
    await browser.pause(2000);
    await loginButton.click();
    await browser.pause(2000);

   });

it(`Registry in to Github`, async () => {
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

   xit("Search in to Github", async () => {
    await browser.url(`https://github.com`);
    
    const searchButton = $(`input[placeholder='Search GitHub']`);
    browser.pause(2000);
    await searchButton.click();
    browser.pause(2000);
    const elem = $(`input[placeholder='Search GitHub']`);
    await elem.setValue(`test125`);
    await browser.pause(4000);
    await browser.keys(['Enter']);
    await browser.pause(4000);
    
  });

   xit(`Registry in to Github thrue footer`, async () => {
    await browser.url(`https://github.com`); 
    const signUpButton = $(`[href="/signup?ref_cta=Sign+up+for+GitHub&ref_loc=footer+launchpad&ref_page=%2F"]`);
    await signUpButton.scrollIntoView();
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

   xit(`Check "Marketplace"`, async () => {
    await browser.url(`https://github.com`); 
    const blogButton = $(`[href="/marketplace"]`);
    await browser.pause(2000);
    await blogButton.click();
    await browser.pause(20000);    
  });

   
 