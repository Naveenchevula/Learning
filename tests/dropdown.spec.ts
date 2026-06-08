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