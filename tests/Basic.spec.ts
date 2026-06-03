//file name should be 
// testname.spec.ts
// testname.test.ts
 import{test,expect} from '@playwright/test'

 test("Login into application using valid credentilas", async function({page}){


await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.getByRole('textbox',{name:'username'}).fill('student') 

await expect(page.getByLabel('username')).toHaveValue('student')
//await page.fill('input[type="password"]', 'password123')

// pressSquentially - it will press the keys sequentially one by one
/*
await page.press('input[type="password"]', 'p') 
await page.press('input[type="password"]', 'a')
await page.press('input[type="password"]', 's')
*/
await page.locator('#password').fill('Password123')

await page.getByRole('button',{name:'Submit'}).click()

// assertion - to verify the expected result with the actual result
await expect(page.locator('h1.post-title')).toHaveText('Logged In Successfully')
//to contains text - to verify the expected text is present in the actual text or not
await expect(page.locator('h1.post-title')).toContainText('Logged In Successfully')
//
await expect(page.getByText('Log out',{exact:true})).toBeVisible() // to verify the element is visible on the page or not
 } )