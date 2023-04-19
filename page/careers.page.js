class CareersPage {
    
    get openPositions() {
        return $(`[href="#positions"]`);
    }

    get allPositions() {
        return $(`[class="pb-md-6"]`);
    }
       
    clickOpenPositions () {
        this.openPositions.click()
    }

    listPositions () {
        return this.allPositions.getText('[id]')
    }

   

    
}

module.exports = new CareersPage()