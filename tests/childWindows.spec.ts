// Mulitple tabs or windows- "pop up "event - page.waitForEvent("popup
//  lunch url
//  wait for "popup" event to appear on the  page without using "await" - page.waitForevent("popup")
// Identify and click on the element which is responsible for generation of "popup"
// we can store the final result of "popup " event in a variable
// const newPage = await page1 
// perform any action on the new tab/window, we must use "newpage" object
// 6.Come back to the main/original page and perfomr any action by using "page"
// promise - pending , succes, failed 




// playwirte handle dialog alrets not pop up alerts 
import{test,expect} from '@playwright/test'

test("Handling child windows",async({page})=>{


await page.goto("https://demo.automationtesting.in/Windows.html")

const page1 = page.waitForEvent("popup")
//console.log(page1) // penging status 
// click on the element which responsible for pop up event 

await page.locator("#Tabbed button").click()

const newPage= await page1
//console.log(newPage)
await newPage.getByText("Downloads",{exact:true}).click()

await expect(newPage.locator("h2#bindings")).toContainText("Selenium Clients and WebDriver Language Bindings")


//await page.bringToFront()
await page.getByText("Home",{exact:true}).click()

await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})

// frame