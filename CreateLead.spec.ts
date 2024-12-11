import { chromium, test } from "@playwright/test";
    test("Launch LeafTaps and Create Lead", async ({page}) => {

//Launch the LeafTaps URL:
    await page.goto("http://leaftaps.com/opentaps/control/main");

//Enter Usernmae:
    await page.locator(`//input[@name='USERNAME']`).fill(`Demosalesmanager`)
    //await page.waitForTimeout(2000)

//Enter Password:
    await page.locator(`//input[@name='PASSWORD']`).fill(`crmsfa`)
    //await page.waitForTimeout(2000)

//Click the Login button
    await page.locator(`//input[@class='decorativeSubmit']`).click()
    //await page.waitForTimeout(2000)
    
//Click CRM/SFA
    await page.locator(`//a[@style='color: black;']`).click()
   // await page.waitForTimeout(2000)

// Click Leads
    await page.locator(`//a[text()='Leads']`).click()
    //await page.waitForTimeout(2000)

// Click Create Lead
    await page.locator(`//a[text()='Create Lead']`).click()
    //await page.waitForTimeout(2000)

//Fill the Company Name
    await page.locator(`//input[contains(@id,'createLeadForm_com')]`).fill(`TESTLEAF`)
    //await page.waitForTimeout(2000)

//Enter First Name
    await page.locator(`#createLeadForm_firstName`).fill(`PRASANTH.D`)
    //await page.waitForTimeout(2000)

//Enter First Name
    await page.locator(`#createLeadForm_lastName`).fill(`DURAISAMY`)
    //await page.waitForTimeout(2000)

//Fill the Salutation
    await page.locator(`#createLeadForm_personalTitle`).fill(`DEVLOPER`)
    //await page.waitForTimeout(2000)

//Fill the Title
    await page.locator(`#createLeadForm_generalProfTitle`).fill(`MR`)
    //await page.waitForTimeout(2000)

//Fill the Annual Revenue
    await page.locator(`//input[@name='annualRevenue']`).fill(`5555`)
    //await page.waitForTimeout(2000)

//Fill the Department
    await page.locator(`#createLeadForm_departmentName`).fill(`Developer`)
    //await page.waitForTimeout(2000)

//Fill the Phone number
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('8867900000')
    //await page.waitForTimeout(2000)

//Click Create Lead
    await page.locator(`//input[@type='submit']`).click()
    //await page.waitForTimeout(3000)

//Display company name, first name, last name and the status
    console.log(`The Company Name is: ${await page.locator(`//span[@id='viewLead_companyName_sp']`).innerText()}`)
    console.log(`The First Name is: ${await page.locator(`#viewLead_firstName_sp`).innerText()}`)
    console.log(`The Last Name is: ${await page.locator(`#viewLead_lastName_sp`).innerText()}`)
    console.log(`The Status is: ${await page.locator(`#viewLead_statusId_sp`).innerText()}`)
    console.log(`Title Name is: ${await page.locator(`#sectionHeaderTitle_leads`).innerText()}`)

})