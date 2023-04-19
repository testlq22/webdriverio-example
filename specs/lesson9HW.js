const assert = require('assert')

describe('lesson 9 home work', () => {

})

it(`lesson 9 home work`, async () => {
    await browser.url(`https://webdriver.io`);
    const apiButton = $(`[href="/docs/api"]`);
    await apiButton.click();
    console.log("Current URL is:" + await browser.getUrl());

    const introductionText = $(`//header//h1`);
    console.log("Text for element:" + await introductionText.getText());

    const jsonWireProtocol = $(`//a[contains(text(),'JSONWire protocol')]`);
    let attr =await jsonWireProtocol.getAttribute('href');
    console.log("JSONWireProtocol link is:" + attr);

    const searchButton = $(`//span[contains(text(),'Search')]`);
    browser.pause(2000);
    await searchButton.click();
    browser.pause(2000);
    let input = $(`#docsearch-input`);
    await input.addValue(`test is `);
    await browser.pause(4000);
    await input.addValue('DONE');
    await  browser.pause(2000);


      
  });