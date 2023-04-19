const assert = require('assert')

describe('lesson 17 home work', () => {

})

xit(`should detect if an element Introduction is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const introductionXpath = $(`//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[1]`);
    isDisplayed = await introductionXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const introductionXpathFull = $(`/html/body/div/div[2]/div/aside/div/nav/ul/li[1]/a`);
    isDisplayed = await introductionXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const introductionRXpath = $(`//body/div[@id='__docusaurus']/div[2]/div[1]/aside[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]`);
    isDisplayed = await introductionRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const introductionAXpath = $(`/html[1]/body[1]/div[1]/div[2]/div[1]/aside[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]`);
    isDisplayed = await introductionAXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const introductionCSS = $(`#__docusaurus > div.main-wrapper.docs-wrapper.docs-doc-page > div > aside > div > nav > ul > li:nth-child(1)`);
    isDisplayed = await introductionCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //manual
    const introductionCSS2 = $(`.menu__link--active`);
    isDisplayed = await introductionCSS2.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //manual
    const introductionCSS3 = $(`[href="/docs/api"]`);
    isDisplayed = await introductionCSS3.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //manual
    const introductionCSS4 = $(`//a[contains(text(),'Introduction')]`);
    isDisplayed = await introductionCSS4.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);   
    
   });

xit(`should detect if an element Expect is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

    //by chrome
    const expectXpath = $(`//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[2]/a`);
    isDisplayed = await expectXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by chrome
    const expectXpathFull = $(`/html/body/div/div[2]/div/aside/div/nav/ul/li[2]/a`);
    isDisplayed = await expectXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const expectRXpath = $(`//a[contains(text(),'Expect')]`);
    isDisplayed = await expectRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const expectAXpath = $(`/html[1]/body[1]/div[1]/div[2]/div[1]/aside[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]`);
    isDisplayed = await expectAXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const expectCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg aside.theme-doc-sidebar-container.docSidebarContainer_rKC_ div.sidebar_CW9Y nav.menu.thin-scrollbar.menu_SkdO ul.theme-doc-sidebar-menu.menu__list li.theme-doc-sidebar-item-link.theme-doc-sidebar-item-link-level-1.menu__list-item:nth-child(2) > a.menu__link`);
    isDisplayed = await expectCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //manual
    const expectCSS2 = $(`.menu__link--active`);
    isDisplayed = await expectCSS2.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //manual
    const expectCSS3 = $(`[href="/docs/api/expect-webdriverio"]`);
    isDisplayed = await expectCSS3.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);    
    
   });

   xit(`should detect if an element Protocols is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const protocolsXpath = $(`//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[3]/div/a`);
    isDisplayed = await protocolsXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const protocolsXpathFull = $(`/html/body/div/div[2]/div/aside/div/nav/ul/li[3]/div/a`);
    isDisplayed = await protocolsXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const protocolsRXpath = $(`//a[contains(text(),'Protocols')]`);
    isDisplayed = await protocolsRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const protocolsAXpath = $(`/html[1]/body[1]/div[1]/div[2]/div[1]/aside[1]/div[1]/nav[1]/ul[1]/li[3]/div[1]/a[1]`);
    isDisplayed = await protocolsAXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const protocolsCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg aside.theme-doc-sidebar-container.docSidebarContainer_rKC_ div.sidebar_CW9Y nav.menu.thin-scrollbar.menu_SkdO ul.theme-doc-sidebar-menu.menu__list li.theme-doc-sidebar-item-category.theme-doc-sidebar-item-category-level-1.menu__list-item.menu__list-item--collapsed:nth-child(3) div.menu__list-item-collapsible > a.menu__link.menu__link--sublist`);
    isDisplayed = await protocolsCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element browser is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[4]/div/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/div[2]/div/aside/div/nav/ul/li[4]/div/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'browser')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserAXpath = $(`/html[1]/body[1]/div[1]/div[2]/div[1]/aside[1]/div[1]/nav[1]/ul[1]/li[4]/div[1]/a[1]`);
    isDisplayed = await browserAXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg aside.theme-doc-sidebar-container.docSidebarContainer_rKC_ div.sidebar_CW9Y nav.menu.thin-scrollbar.menu_SkdO ul.theme-doc-sidebar-menu.menu__list li.theme-doc-sidebar-item-category.theme-doc-sidebar-item-category-level-1.menu__list-item.menu__list-item--collapsed:nth-child(4) div.menu__list-item-collapsible > a.menu__link.menu__link--sublist`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element Element is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[5]/div/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/div[2]/div/aside/div/nav/ul/li[5]/div/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'element')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserAXpath = $(`/html[1]/body[1]/div[1]/div[2]/div[1]/aside[1]/div[1]/nav[1]/ul[1]/li[4]/div[1]/a[1]`);
    isDisplayed = await browserAXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg aside.theme-doc-sidebar-container.docSidebarContainer_rKC_ div.sidebar_CW9Y nav.menu.thin-scrollbar.menu_SkdO ul.theme-doc-sidebar-menu.menu__list li.theme-doc-sidebar-item-category.theme-doc-sidebar-item-category-level-1.menu__list-item.menu__list-item--collapsed:nth-child(4) div.menu__list-item-collapsible > a.menu__link.menu__link--sublist`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element mock is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[6]/div/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/div[2]/div/aside/div/nav/ul/li[6]/div/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'mock')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
    //by ChroPath
    const browserCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg aside.theme-doc-sidebar-container.docSidebarContainer_rKC_ div.sidebar_CW9Y nav.menu.thin-scrollbar.menu_SkdO ul.theme-doc-sidebar-menu.menu__list li.theme-doc-sidebar-item-category.theme-doc-sidebar-item-category-level-1.menu__list-item.menu__list-item--collapsed:nth-child(6) div.menu__list-item-collapsible > a.menu__link.menu__link--sublist`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element Appium is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[2]`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/div[2]/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[2]`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'Appium')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
    //by ChroPath
    const browserCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg main.docMainContainer_TCnq div.container.padding-top--md.padding-bottom--lg div.row div.col.docItemCol_DM6M:nth-child(1) div.docItemContainer_vinB article:nth-child(1) div.theme-doc-markdown.markdown p:nth-child(2) > a:nth-child(2)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const CSS = $(`[href="http://appium.io"]`);
    isDisplayed = await CSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element 'old text documentation' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/div[1]/div[2]/p/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/div[2]/div/main/div/div/div[1]/div/article/div[2]/div[1]/div[2]/p/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'old documentation websites')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
    //by ChroPath
    const browserCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg main.docMainContainer_TCnq div.container.padding-top--md.padding-bottom--lg div.row div.col.docItemCol_DM6M:nth-child(1) div.docItemContainer_vinB div.theme-doc-markdown.markdown div.admonition.admonition-info.alert.alert--info:nth-child(3) div.admonition-content p:nth-child(1) > a:nth-child(2)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const CSS = $(`[href="/versions"]`);
    isDisplayed = await CSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element 'contribute' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[2]/div/ul/li[2]/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/div[2]/div/main/div/div/div[2]/div/ul/li[2]/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body/div[@id='__docusaurus']/div[2]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[2]/a[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
    //by ChroPath
    const browserCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg main.docMainContainer_TCnq div.container.padding-top--md.padding-bottom--lg div.row div.col.col--3:nth-child(2) div.tableOfContents_cNA8.thin-scrollbar.theme-doc-toc-desktop ul.table-of-contents.table-of-contents__left-border li:nth-child(2) > a.table-of-contents__link.toc-highlight`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const CSS = $(`li a[href="#contribute"]`);
    isDisplayed = await CSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`//a[contains(text(),'Contribute')]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element 'Each command documentation ...' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/p[2]`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/div[2]/div/main/div/div/div[1]/div/article/div[2]/p[2]`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[2]/p[2]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserAXpath = $(`/html[1]/body[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[2]/p[2]`);
    isDisplayed = await browserAXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
    //by ChroPath
    const browserCSS = $(`div.main-wrapper.docs-wrapper.docs-doc-page:nth-child(3) div.docPage_P2Lg main.docMainContainer_TCnq div.container.padding-top--md.padding-bottom--lg div.row div.col.docItemCol_DM6M:nth-child(1) div.docItemContainer_vinB article:nth-child(1) div.theme-doc-markdown.markdown > p:nth-child(5)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`//p[contains(text(),'Each command documentation')]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   
// Footer elements

   xit(`should detect if an element 'Getting Started' is displayed` , async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[1]/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[1]/ul/li[1]/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'Getting Started')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(1) ul.footer__items li.footer__item:nth-child(1) > a.footer__link-item`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const CSS = $(`footer [href="/docs/gettingstarted"]`);
    isDisplayed = await CSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element 'API Reference' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[2]/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[1]/ul/li[2]/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'API Reference')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(1) ul.footer__items li.footer__item:nth-child(2) > a.footer__link-item`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const CSS = $(`footer [href="/docs/api"]`);
    isDisplayed = await CSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
    
   });

   xit(`should detect if an element 'Contribute' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[3]/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[1]/ul/li[3]/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body/div[@id='__docusaurus']/footer[1]/div[1]/div[1]/div[1]/ul[1]/li[3]/a[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(1) ul.footer__items li.footer__item:nth-child(3) > a.footer__link-item`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="/docs/contribute/"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Help' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[4]/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[1]/ul/li[4]/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'Help')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(1) ul.footer__items li.footer__item:nth-child(4) > a.footer__link-item`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="/community/support"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Stack Overflow' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[2]/ul/li[1]/a/span`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[2]/ul/li[1]/a/span`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/footer[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/a[1]/span[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(2) ul.footer__items li.footer__item:nth-child(1) a.footer__link-item > span:nth-child(1)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="https://stackoverflow.com/questions/tagged/webdriver-io"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Support Chat' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[2]/ul/li[2]/a/span`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[2]/ul/li[2]/a/span`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/footer[1]/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]/span[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(2) ul.footer__items li.footer__item:nth-child(2) a.footer__link-item > span:nth-child(1)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="https://gitter.im/webdriverio/webdriverio"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Stack' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[2]/ul/li[3]/a/span`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[2]/ul/li[3]/a/span`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/footer[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/a[1]/span[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(2) ul.footer__items li.footer__item:nth-child(3) a.footer__link-item > span:nth-child(1)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Twitter' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[2]/ul/li[4]/a/span`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[2]/ul/li[4]/a/span`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/footer[1]/div[1]/div[1]/div[2]/ul[1]/li[4]/a[1]/span[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(2) ul.footer__items li.footer__item:nth-child(4) a.footer__link-item > span:nth-child(1)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="https://twitter.com/webdriverio"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Tidelift Subscription' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[1]/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[3]/ul/li[1]/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//a[contains(text(),'Tidelift Subscription')]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(3) ul.footer__items li.footer__item:nth-child(1) > a.footer__link-item`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="https://webdriver.io/docs/enterprise.html"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Donate to WebdriverIO' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[2]/a/span`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[3]/ul/li[2]/a/span`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/footer[1]/div[1]/div[1]/div[3]/ul[1]/li[2]/a[1]/span[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(3) ul.footer__items li.footer__item:nth-child(2) a.footer__link-item > span:nth-child(1)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="https://opencollective.com/webdriverio"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Swag Store' is displayed`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[3]/a/span`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[3]/ul/li[3]/a/span`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/footer[1]/div[1]/div[1]/div[3]/ul[1]/li[3]/a[1]/span[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(3) ul.footer__items li.footer__item:nth-child(3) a.footer__link-item > span:nth-child(1)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="http://shop.webdriver.io"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   xit(`should detect if an element 'Blog`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[4]/a`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[3]/ul/li[4]/a`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body/div[@id='__docusaurus']/footer[1]/div[1]/div[1]/div[3]/ul[1]/li[4]/a[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(3) ul.footer__items li.footer__item:nth-child(4) > a.footer__link-item`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="/blog"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });

   it(`should detect if an element 'GitHub`, async () => {
    await browser.url(`https://webdriver.io/docs/api`);

     //by chrome
    const browserXpath = $(`//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[5]/a/span`);
    isDisplayed = await browserXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

     //by chrome
    const browserXpathFull = $(`/html/body/div/footer/div/div[1]/div[3]/ul/li[5]/a/span`);
    isDisplayed = await browserXpathFull.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //by ChroPath
    const browserRXpath = $(`//body[1]/div[1]/footer[1]/div[1]/div[1]/div[3]/ul[1]/li[5]/a[1]/span[1]`);
    isDisplayed = await browserRXpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
        
    //by ChroPath
    const browserCSS = $(`footer.footer.footer--dark:nth-child(4) div.container.container-fluid div.row.footer__links div.col.footer__col:nth-child(3) ul.footer__items li.footer__item:nth-child(5) a.footer__link-item > span:nth-child(1)`);
    isDisplayed = await browserCSS.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);

    //Manual
    const Xpath = $(`footer [href="https://github.com/webdriverio/webdriverio"]`);
    isDisplayed = await Xpath.isDisplayed();
    console.log('Is displayed?:' + isDisplayed);
     
   });




 