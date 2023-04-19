const assert = require('assert')

const apiPage = require('../page/api.page.js')
const blogPage = require('../page/blog.page.js')
const versionsPage = require('../page/versions.page.js')

describe('lesson 25 home work', () => {

})

it('should click API Button', async () => {
    await browser.url('https://webdriver.io')
    await apiPage.clickApiButton();
    await browser.pause(5000);
    await apiPage.clickContribute();
    await browser.pause(5000); 
    
})

it(`should click Blog Button`, async () => {
    await blogPage.clickBlogButton();
    await browser.pause(5000);
    console.log('Is displayed?:' + await blogPage.isTeDisplayed());
  });

it(`should click Versions(V7) Button`, async () => {
    await versionsPage.clickVersionButton();
    await browser.pause(5000);
    await versionsPage.clickV5Button();
    await browser.pause(5000);
});