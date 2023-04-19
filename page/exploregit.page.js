class ExploreGitPage {
    
    get topics() {
        return $(`[href="/topics"]`);
    }

    get topicsLabel() {
        return $(`//h1[contains(text(),'Topics')]`);
    }
    
    clickTopics () {
        this.topics.click()
    }

    moveToTopics () {
        this.topics.moveTo();
    }

    isLabelDisplayed () {
        return this.topicsLabel.isDisplayed()
     }

    

    
}

module.exports = new ExploreGitPage()