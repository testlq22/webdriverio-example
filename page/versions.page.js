class VersionsPage {
    
    get versionButton() {
        return $(`.navbar__items [href="/versions"]`);
    }

    get v5Button() {
        return $(`[href="https://v5.webdriver.io"]`);
    }

    clickVersionButton () {
        this.versionButton.click()
    }

    clickV5Button () {
        this.v5Button.click()
    }

    
}

module.exports = new VersionsPage()

