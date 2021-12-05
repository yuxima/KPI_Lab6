class MainPage {
  constructor(page){
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.demoblaze.com');
  }

  async goToHomePage(){
       // Click text=Home (current)
    await this.page.click('text=Home (current)');
    await expect(this.page).toHaveURL('https://www.demoblaze.com');
  }
  
 async clickOnMenuPuncts(){
      // Click text=Phones
    await this.page.click('text=Phones');
    await expect(this.page).toHaveURL('https://www.demoblaze.com');
    // Click text=Laptops
    await this.page.click('text=Laptops');
    await expect(this.page).toHaveURL('https://www.demoblaze.com');
    // Click text=Monitors
    await this.page.click('text=Monitors');
    await expect(this.page).toHaveURL('https://www.123.com');

 }
}

class ContantPage {
  constructor(page){
    this.page = page;
  }

  async navigate() {
    // Click a:has-text("Contact")
    await this.page.click('a:has-text("Contact")');
  }
    async inputData(){
    // Click input[type="text"]
    await this.page.click('input[type="text"]');
    // Fill input[type="text"]
    await this.page.fill('input[type="text"]', 'qw');
    // Click #recipient-name
    await this.page.click('#recipient-name');
    // Fill #recipient-name
    await this.page.fill('#recipient-name', 'qw');
    // Click textarea
    await this.page.click('textarea');
    // Fill textarea
    await this.page.fill('textarea', 'qw');
}

async submit(){
  this.page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
      await this.page.click('text=Send message');
      // Click text=Send message

    await expect(this.page).toHaveURL('https://www.demoblaze.com')
}
}

const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  const mainPage = new MainPage(page);
  const contactPage = new ContantPage(page);

  await mainPage.navigate();
  await mainPage.clickOnMenuPuncts();
  await mainPage.goToHomePage();
  
  await contactPage.navigate();
  await contactPage.inputData();
  await contactPage.submit();
});