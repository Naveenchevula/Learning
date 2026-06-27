// File Download

//  Step by step process to handle multiple tabs/windows using PW:

// 1. Launch the url = page.goto()
// 2. Wait for "download" event to appear on the page without using "await"  
// - const download = page.waitForEvent("download")
// 3. Identify and click on the element which is responsible for generation of "download" event on the page.
// 4. Wait for the completion of the downloading.
// const download1 = await download
// 5. by using path module we can generate the path to store the downlodable file
// 6. Download - suggestedFilename() - Will return us the filename of the downloaded file
// 7. saveAs(pathofthefile)
// 8. fs - Validate if the fileName is available inside the download folder or not


 import{test,expect} from '@playwright/test'
import path from 'path'


 test("Handling file download scenario",async({page})=>{

await page.goto("https://demoqa.com/upload-download")

 const downloadResult = page.waitForEvent('download')

 await page.locator("#downloadButton").click()

 const download = await downloadResult


  const downloadDir = path.join (__dirname,"../downloads")

  const fileName  = await download.suggestedFilename()
  console.log(fileName)

  const filePath = path.join(downloadDir,fileName)
  console.log(filePath)

 // saveAS(filepath 
 await download.saveAs(filePath)

await expect(filePath).toContain(fileName)



 })