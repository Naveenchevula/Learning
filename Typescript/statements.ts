// conditional Statement - It allows us to execute a block of code based on a condition.

// if statement  - this will handle only the postive scenario
// if else statement - this will handle both positive and negative scenarios
// if else if statement     - this will handle multiple conditions
// switch statement - this will handle multiple conditions based on the value of a variable
// ternary operator(? : ) - short hand for if else statement
 


// if statement 

// syntax
// if(condition){
//     // block of code to be executed if the condition is true
// }

console.log("************if statment ***********");
let text = "Login"
if (text == "Login") {
    console.log("The text value of an element is matching");
}

// if else statement
// syntax
// if(condition){
//     // block of code to be executed if the condition is true
// }else{
//     // block of code to be executed if the condition is false
// }
console.log("************if else ***********");
let text1 = "Login"
if (text1 == "login") {
    console.log("The text value of an element is matching");
} else {
    console.log("The text value of an element is not matching");
}

// if else if statement
// syntax
// if(condition1){ 
//     // block of code to be executed if condition1 is true
// } else if(condition2){
//     // block of code to be executed if condition2 is true
// } else {
//     // block of code to be executed if both condition1 and condition2 are false
// }
console.log("************if else if ***********");
let text2 = "Login"     
if (text2 == "login") {
    console.log("The text value of an element is matching");
} else if (text2 == "Login") {
    console.log("The text value of an element is matching");
} else {
    console.log("The text value of an element is not matching");
}
//
let brower= "chrome"
if(brower == "chrome"){
    console.log("The browser is chrome");
} else if(brower == "firefox"){
    console.log("The browser is firefox");
} else if(brower == "edge"){
    console.log("The browser is edge");
}           
else {
    console.log("The browser is not chrome, firefox or edge");
}

// switch statement
// syntax
// switch(expression){          
//     case value1:
//         // block of code to be executed if expression matches value1
//         break;
//     case value2:
//         // block of code to be executed if expression matches value2
//         break;               
//     default:
//         // block of code to be executed if expression does not match any of the cases
// }        

console.log("************switch statement ***********");
let browser = "@@@@"
switch (browser) {
    case "chrome":      
        console.log("The browser is chrome");
        break;  
    case "firefox":
        console.log("The browser is firefox");
        break;
    case "edge":
        console.log("The browser is edge");
        break;
    default:
        console.log("The browser is not chrome, firefox or edge");
}

// ternary operator(? : ) - short hand for if else statement
// syntax
// condition ? expression1 : expression2
// if the condition is true, expression1 will be executed, otherwise expression2 will be executed   

console.log("************ternary operator ***********");
let age = 18
let result = age >= 21 ? "You are eligible to vote" : "You are not eligible to vote"
console.log(result);

// Assignment :
// Write a program to display the grade of a student:
// >90 -A
// >80 && <90-B 
// >70 && <80-C
// >50 && <70-D
// <50 -F

// solution using if else if statement
let marks = 45     
if (marks > 90) {
    console.log("Grade: A");
} else if (marks > 80 && marks <= 90) {
    console.log("Grade: B");
} else if (marks > 70 && marks <= 80) {
    console.log("Grade: C");
} else if (marks > 50 && marks <= 70) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}           




