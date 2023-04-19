class ApiPage {
    
    get apiButton() {
        return $(`.navbar__items [href="/docs/api"]`);
    }

    get contribute() {
        return $(`.table-of-contents.table-of-contents__left-border [href="#contribute"]`);
    }

    clickApiButton () {
        this.apiButton.click()
    }

    clickContribute () {
        this.contribute.click()
    }

    
}

module.exports = new ApiPage()