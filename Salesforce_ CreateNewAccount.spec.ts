import { chromium, test, expect } from "@playwright/test";
    test("Launch LeafTaps and Create Lead", async ({page}) => {

//Launch the LeafTaps URL:
    await page.goto("https://login.salesforce.com/");

//Enter Username
    await page.getByLabel(`Username`).fill(`prasanth1253024@gmail.com`)

//Enter Password
    await page.getByLabel(`Password`).fill(`Kantharupan123`)

//Click Login
    await page.locator(`#Login`).click()

//Verify the page title & URL

    expect(page).toHaveTitle(`Lightning Experience`).then 
    console.log(`Tital Matched`);
    
    expect(page).toHaveURL(`https://testleaf87-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home`).then 
    console.log(`URL Matched`);
    
//Click App Launcher
    await page.locator(`.slds-r5`).click()

//Click View All
    await page.getByText(`View All`).click()
    await page.waitForTimeout(3000);

//Enter ‘Service’ in the App Launcher Search box 
    await page.getByPlaceholder(`Search apps or items...`).fill(`Service`)

//Click Service using index based XPath
    await page.locator(`(//p/mark)[1]`).click()

//Click Accounts using attribute based CSS selector
    await page.locator(`[data-id="Account"]`).click()

//Click New using getByRole
    await page.getByRole(`button`,{name: 'New'}).click()
    
//Enter Account name using attribute based CSS selector
    await page.locator('[name^="Nam"]').fill(`DEV_PRASANTH`)
    
    
//Click on Save using XPath
    await page.locator(`//button[contains(@name,'SaveE')]`).click()

const message = await page.locator(`//div[@data-key='success']`).textContent()
const success = message?.split('Press')[0]

console.log(success);


})