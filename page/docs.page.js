class DocsPage {
    
    get editButton() {
        return $(`.navbar__items [href="/docs/gettingstarted"]`);
    }

    clickEditButton () {
        this.editButton.click()
    }

}

module.exports = new DocsPage()