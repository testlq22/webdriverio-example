class MainPage {

    get searchInput() {
        const searchButton = $(`//span[contains(text(),'Search')]`);
        searchButton.click();
        return $(`#docsearch-input`);
    }

    get searchInputNext() {
        return $(`#docsearch-input`);
    }

    setUserName (value) {
        this.searchInputNext.addValue(value)
    }
// Homework Lesson 27
    docsClick() {
        const guideButton = $('[href="/docs/gettingstarted"]');
        guideButton.click();
    }
}

module.exports = new MainPage()