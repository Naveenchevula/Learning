// import {test, expect} from '@playwright/test'
// import path from 'path'

// test("Handling file uploads", async function({page}){
//     await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

//     //setInputFiles("path of the file(s)")

//    // console.log(__dirname) // C:\Users\pkroy\Videos\PWTSMay26\tests../testdata/AILLM.jpg

//     // const filePath = path.join(__dirname, "../testdata/AILLM.jpg")
//     // const filePath1 = path.join(__dirname, "../testdata/AILLM1.jpg")
//    // console.log(filePath) // C:/Users/pkroy/Videos/PWTSMay26/testdata/AILLM.jpg
    

//     await page.locator("#filesToUpload")
//     .setInputFiles(["testdata/AILLM.jpg","testdata/AILLM1.jpg"])

//     // await page.locator("#filesToUpload")
//     // .setInputFiles([filePath, filePath1])


//     await expect(page.locator("#fileList li").nth(0)).toContainText("AILLM.jpg")
//     await expect(page.locator("#fileList li").nth(1)).toContainText("AILLM1.jpg")

//     await page.waitForTimeout(2000)

// })





import { test, expect } from '@playwright/test'
import path from 'path'

test.only('Handling file upload', async ({ page }) => {
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

  const filePath = path.join(__dirname, '../testdata/Screenshot_1.png')
  const filePath1 = path.join(__dirname, '../testdata/Screenshot_2.png')

  await page.locator('#filesToUpload').setInputFiles([filePath, filePath1])

  await expect(page.locator('#fileList li').first()).toContainText('Screenshot_1.png')
  await expect(page.locator('#fileList li').last()).toContainText('Screenshot_2.png')
})























