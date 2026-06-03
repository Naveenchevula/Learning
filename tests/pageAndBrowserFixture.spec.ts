
import{ test,expect} from'@playwright/test';
// title of the test case should be meaning full and should be uquie to the test case - it should describe the functionality being tested in the test case

test("Title", async function({page}){



})
test('Title1', async({browser})=>{

    const context = await browser.newContext() // create a context of a browser
    const page = await context.newPage() // create a page in the browser context
    const page1 = await context.newPage() // create another page in the same browser context
})
//page - it is a fixture in playwright which help us in setting up the browser and page for our test cases
// page comes from Page class in playwright 
//browser - it is a fixture in playwright which help us in setting up the browser for our test cases
// context - it is a fixture in playwright which help us in setting up the browser context for our test cases
//request - it is a fixture in playwright which help us in sending the api requests and get the response from the api
// device - it is a fixture in playwright which help us in setting up the mobile device for testing
// 1. page fixture will identify ONLY a single page on the browser where as browser fixture will identify the entire browser and context fixture will understand the 
// complete browser - it may have more than one page 
// 2. browser fixture will not automatically launch the browser where as page 
// fixture will automatically launch the browser and create a new page on the browser 
// 3. browser fixture will able to create more than one page on the browser where as page fixture will only able to create a single page on the browser


//selenium - it uses HTTP connections - it is three tear architecture - client , server and browser - client send the request to the server and server process the request and send the response back to the client and server communicate with the browser using HTTP connections
//playwright is uses websockets  [its two tear architecture - client and server] to communicate with the browser and perform the actions on the browser and get the response from the browser
// wirte code in vs code - run on node js - node js interact with browser using websockets 
// depend testcase can no execute in parallel mode 
