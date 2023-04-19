class SearchPage {
    
    get typeScriptButton() {
        return $(`[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]`);
    }

    get firstResult() {
        return $(`//body[1]/div[4]/main[1]/div[1]/div[3]/div[1]/ul[1]/li[1]/div[2]/div[1]/div[1]/a[1]`);
    }
    
    clickTypeScriptButton () {
        this.typeScriptButton.click()
    }

    
    clickFirstResult () {
        this.firstResult.click()
    }  
    
}

module.exports = new SearchPage()