import{test,expect} from '@playwright/test'
// playwirght automatically dismiss alrets 
// if one clicks on cancell, if yes or no it will click in no [dismiss]
// dialog event >> alret, pop up 
//dialog is class available in playwright  >> you need to write dialog event before an action [like before click on button [button will give pop up]]
//1. Simple alert - Only one button
// 2. confrim alert - yes/ no , subimt /cancel dismiss
//3. prompt alert - Along with yes/no - Input box as well


// dialog event - alert
// popup event - child window/tab/page
// download event - File download 

test("Handling alret ",async({page})=>{


await page.goto("https://demoqa.com/alerts")
// before you click on an element which is responsible for generation of an alert 
// we need to wait for "dialog" event to appear on the page.s
// handles the dialog event as soon as  it appear on page 

// Dialog 
// 1. dialog.accept(argument ) - to click on Ok/Submit/Yes
// 2. dialog.dismiss() - To cancel 
//3. dialog.message()- To get the text displayed on the alert 

//
const prompt = "test 123"
await page.on("dialog",async(dialog)=>{
  const message = await dialog.message()
await console.log(message)
await dialog.accept(prompt)

})

// wirte alreat class for one time it wil perform for all actions / all alrets 
await page.locator("#alertButton").click()

await page.locator ("#confirmButton").click()
await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")
 
await page.locator("#promtButton").click()
await expect(page.locator("#promptResult")).toHaveText(`You entered ${prompt}`)

})

