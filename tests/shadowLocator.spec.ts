import{test,expect} from "@playwright/test"

test("Handling showdowdome locatore",async({page})=>{

// in playwirght there is no spl for shadow dom same as normal element 
await page.goto("https://selectorshub.com/xpath-practice-page/")

 const shadowElement  = await page.locator("#kils")
 shadowElement.fill("Naveen_shadow")
 await expect(shadowElement).toHaveValue("Naveen_shadow")

})