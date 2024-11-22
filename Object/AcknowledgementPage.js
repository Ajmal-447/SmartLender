class Acknowledgementpage{
    constructor(page){
        this.page = page;
        this.bankruptcy = page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[1]/fieldset/div[1]/div[1]/label');
        this.pendinglawsuits = page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/fieldset/div[1]/div[1]/label');
        this.taxescurrent = page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[3]/fieldset/div[1]/div[1]/label');
        this.checkbox = page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[4]/fieldset/div[1]/div/label/div');
        this.submitButton = this.page.locator('.sc-bqWxrE.fKpSOq');
    }

    async Acknowledgementinfo(){
        await this.bankruptcy.click();
        await this.pendinglawsuits.click();
        await this.taxescurrent.click();
        await this.checkbox.click();
        await this.submitButton.click();
    }
    
}

module.exports = { Acknowledgementpage };