import { chromium, test } from "@playwright/test";
    test("Launch LeafTaps and Create Lead", async ({page}) => {

//Launch the LeafTaps URL:
    await page.goto("http://leaftaps.com/opentaps/control/main");

//Enter Usernmae:
    await page.locator(`//input[@name='USERNAME']`).fill(`Demosalesmanager`)
   
//Enter Password:
    await page.locator(`//input[@name='PASSWORD']`).fill(`crmsfa`)
    
//Click the Login button
    await page.locator(`//input[@class='decorativeSubmit']`).click()
     
//Click CRM/SFA
    await page.locator(`//a[@style='color: black;']`).click()

// Click Leads
    await page.locator(`//a[text()='Leads']`).click()

// Click Find Leads
    await page.locator(`//a[text()='Find Leads']`).click()

//Enter the First Name
    await page.locator(`(//div[@class = "x-form-element"]/input[@name = "firstName"])[3]`).fill(`Prasanth`)

//Click on Find Lead
    await page.locator(`//button[text()='Find Leads']`).click()

// Locate the First resultant lead
    await page.locator(`(//div[@class = "x-grid3-cell-inner x-grid3-col-partyId"]/a)[1]`).click()

// Click Edit 
    await page.locator(`//a[text()='Edit']`).click()

//Update Company Name
    await page.locator(`//input[contains(@id,'updateLeadForm_companyName')]`).fill(`TESTLEAF`)

//Update annualRevenuee
    await page.locator(`//input[contains(@id,'updateLeadForm_annualRevenue')]`).fill(`255002`)

//Update departmentName
    await page.locator(`//input[contains(@id,'updateLeadForm_departmentName')]`).fill(`Developer`)

//Update description
    await page.locator(`//textarea[contains(@id,'updateLeadForm_description')]`).fill(`EditaLead`)

//Click on Update button
    await page.locator(`//input[@value='Update']`).click()

//Print and Verify the Updated 

console.log(`The Company Name is: ${await page.locator(`//span[@id='viewLead_companyName_sp']`).innerText()}`)
console.log(`The Annual Revenue is: ${await page.locator(`#viewLead_annualRevenue_sp`).innerText()}`)
console.log(`The Department is: ${await page.locator(`#viewLead_departmentName_sp`).innerText()}`)
console.log(`The Description is: ${await page.locator(`#viewLead_description_sp`).innerText()}`)
console.log(`Title Name is: ${await page.locator(`#sectionHeaderTitle_leads`).innerText()}`)

    })
