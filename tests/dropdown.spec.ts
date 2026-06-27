// dropdwon

// 2 types of dd
// 1. static drop down - values will never get changed [Gender/country]
     // a. single select 
     // b. Mulit select 
// 2. Dynamic drop down - value will changed 
 // a. single select 
 // b. Mulit select 


 // Developmemt of DD 
 // 1. using <select> tag
 // 2. uding no select > div / li/ span etc 


 // 1. DD using <select> tag 

/*
1. lunch url
2. locate the drop down element 
3. select the option >> 
// selectOption("value",{label or value or index})
*/ 
// Example : page.locator("#DD").selectOption("AL", {value:"DZ"})or {label: "Bahran"} or {index:10}

// 4. if the drop down is multi select - selectOptions(["AS","BS","cs"])


//2. DD deeveloped using non select tag 

/*
1. lunch url
2. locate the drop down element  with locator
3. Click on the dropdown  element idednfied in step 2
4. Identify and click the element that you want to select
// mouse operations 

*/
import{test,expect} from '@playwright/test'
test("handling dropdown developed with select tag", async({page})=>{
// 1. luch url 
await page.goto("https://practice.expandtesting.com/dropdown")

// 2. locate the dropdwon 
const countryDD = page.locator("#country")
// 3.get value from dropdown 
countryDD.selectOption("AF")
await expect(countryDD).toHaveValue("AF")
// value , id , index
// 2nd way we can use value as option 
await countryDD.selectOption({value:"CN"})
// label >> text value <option value="CN">China</option>  here lable is china 
 
await countryDD.selectOption({label:"Central African Republic"})
 // by using index 

 await countryDD.selectOption({index:102})

// multi selector 

await page.goto("https://demoqa.com/select-menu")

const carDD = await page.locator('#cars')
// multi select provide values in array 
 
await carDD.selectOption(["volvo","saab","audi"])
// multi select provide values in array 

await expect(carDD).toHaveValues(["volvo","saab","audi"])

await carDD.selectOption([{label:'Saab'},{index:3},{value:'volvo'}])

// Assigmenst to complete 
// Select the value form the drop down which have been developed by non select tag 
// https://demoqa.com/select-menu select values section / multi select aswell 

}
)
test("Handling select without select value",async({page})=>{

await page.goto("https://demoqa.com/select-menu")

//
const selecDD =await page.locator("#withOptGroup")
await selecDD.click()
await page.getByText("Group 1, option 1").click()
await expect(selecDD).toContainText("Group 1, option 1")
await page.locator("#react-select-2-option-2").click()
await expect(selecDD).toContainText("A root option")

})
test("select one option from dropdwon",async({page})=>{

await page.goto("https://demoqa.com/select-menu")
const  selectOne =await page.locator("#selectOne")
await selectOne.click();

await page.locator("#react-select-3-input").click()
await expect(selectOne).toContainText("Mrs.")
     
}
)
test("Old Style select meny handling ",async({page})=>{


await page.goto("https://demoqa.com/select-menu") 

const OldStyle = await page.locator("#oldSelectMenu")
await OldStyle.selectOption("Black")
await expect(OldStyle).toContainText("Black")

})

test.only("Handling multiselect",async({page})=>{
    
await page.goto("https://demoqa.com/select-menu") 
 
 const multiSele  = await page.locator("//input[@id='react-select-4-input']")
await multiSele.click()
await page.waitForTimeout(3000)
const Black = await page.locator("#react-select-4-option-2")
 await Black.click()
const green = await page.locator("#react-select-4-option-0")
 await green .click()
const selectedValues = page.locator(".css-1dyz3mf");
   await expect(selectedValues).toContainText("Black");
  await expect(selectedValues).toContainText("Green");


}
)
