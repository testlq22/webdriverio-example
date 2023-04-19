class BlogPage {
    
    get blogButton() {
        return $(`.navbar__items [href="/blog"]`);
    }

    get findText() {
        return $(`//*[contains(text(),'Recent posts')]`);
    }

    clickBlogButton () {
        this.blogButton.click()
    }

    isTeDisplayed () {
       return this.findText.isDisplayed()
    }

    
}

module.exports = new BlogPage()

