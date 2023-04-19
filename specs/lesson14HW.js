const assert = require('assert')

describe('lesson 14 home work', () => {

})

it("lesson 14 home work", async () => {
    await browser.url(`https://webdriver.io/docs/api`);
    const jsonWireProtocolLink = $('//*[text()="JSONWire protocol"]').getAttribute('href'); 
    await browser.newWindow(await jsonWireProtocolLink); 
    await browser.switchWindow('webdriver')
    await browser.switchWindow('selenium');
    const wikiButton = $(`strong a[href="/SeleniumHQ/selenium/wiki"]`);
    isDisplayed = await wikiButton.isDisplayed();
    console.log('Is wiki button displayed?:' + isDisplayed);
    await browser.switchWindow('webdriver')

    const headerTitle = $('//header//h1');
    const value = await headerTitle.getText();
    //console.log('Intro TEXT:' + value);
    await browser.waitUntil(() =>{       
      return (value === `Introduction`);
      }, 5000, 'blog is not displayed');    

    await headerTitle.saveScreenshot('HeaderTitle.png');

    const twitterButton = $(`[href="https://twitter.com/webdriverio"]`);
    isDisplayed = await twitterButton.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    isTwitterButtonDisplayedInViewPort = await twitterButton.isDisplayedInViewport();
    console.log('Is displayed in viewport?:' + isTwitterButtonDisplayedInViewPort);

    await twitterButton.scrollIntoView();
    isDisplayed = await twitterButton.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    isTwitterButtonDisplayedInViewPort = await twitterButton.isDisplayedInViewport();
    console.log('Is displayed in viewport?:' + isTwitterButtonDisplayedInViewPort);

    const blogButton = $(`[href="/blog"]`);
    console.log('Blog button is focused before click:' + await blogButton.isFocused());
    await  browser.pause(2000);
    await blogButton.click();
    await  browser.pause(2000);
    console.log('Blog button is focused after click:' + await blogButton.isFocused());

      
  });
