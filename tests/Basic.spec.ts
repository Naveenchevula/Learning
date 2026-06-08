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

 // select radio / checkbox
 // get the value of the element
 // test.only - run only one test case which is selected only 

 test('Handling radio button and checkbox', async function({page}){



await page.goto("https://testautomationpractice.blogspot.com/")

// click on element  
// check() - which is work for radio button and checkbox  [It validates if the element is already checked/ 
// selected, if it not selected then it click on element  ]
// uncheck() - it validated if the elemenyt is not already checked/ selected , if it is selected then it click on element 

await page.getByRole('radio',{name:'Female'} ).click()
// toBechecked () - which validats if the element is checked or not 
await expect(page.getByRole('radio',{name:'female'})).toBeChecked

await page.getByRole('checkbox',{name:'tuesday'}).check();
await expect(page.getByRole('checkbox', { name: 'tuesday' })).toBeChecked
// un checked same & validated to be unchecked 
//await page.getByRole('checkbox',{name:'tuesday'}).uncheck()
await page.getByRole('checkbox',{name:'tuesday'}).check();
await expect(page.getByRole('checkbox', { name: 'tuesday' })).not.toBeChecked

const checkbox = page.getByRole('checkbox')
const count = await checkbox.count()

for (let i = 0; i< count; i++){
 checkbox.nth(i).click // nth is index value

}

await page.waitForTimeout(1000)

 })

// dropdown 
// get the text value of an element/multiple elements 
test.only('Get the text from an element', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
// textContent()  - Even element not visible on page it will get the text value 
// innerText() - it return text value form  visible on page 
const text = await page.locator("h1.title").innerText()
console.log(text);

// get text value from mulitle elements 
// allTextContents()
//allInnerText()

const allText = await page.locator("h2.title").allTextContents()


console.log(allText)


})


