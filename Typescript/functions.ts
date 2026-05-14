// functions - a function is a block of code to perfomr a specific task.
// it is set of instruction that perform a specific task.

// validate a login scenario 
// fill the username
// fill the password
// click on login button

// 100 testcase availble in test suite
// 100 test cases - 300 lines of code to login to the application
// all hurdered need to fill the username, password and click on login button
// to avoid this we can create a function and call the function in all test cases
// to avoid Duplication of code we use functions
// Maintance - if we need to change the login scenario we need to change in all test cases
// to avoid this we can create a function and call the function in all test cases
// reusability - we can reuse the function in all test cases
function login()
{
    // fill the user name
    // fill the password
    // click on login button
}
// type of function
//1. Named funtion  - function declaration 
//2. Anonymous function - function expression
//3. Arrow function - introduced in ES6 
//4. Constructor function - used inside the class 

// Named function - function declaration >> function keyword followed by the function name and parentheses// define the function 

/*
Syntax of named function
function functionName(){
    // function body
}

function login(){
    // fill the user name
    // fill the password
    // click on login button
        }

function functionName(parameters) // defining the function
{
// block of code to be executed
return 
}
functionName(arguments) // calling the function

==============================================

Ts: 
function functionName(parameters: datatype): returnType(optional) // defining the function
{
// block of code to be executed
return 
// Void - if no return type 
}

*/
//1. non parameterized function - no parameters and no return type
function greet(): void { // void means no return type
    console.log("Hello, welcome to TypeScript functions!");
}
// calling the function
greet();
// return mean >> store attribute the value and return it to the caller
// 2.Non  parameterzied function & resturning function
function greetings(){
    return "Hello, welcome to TypeScript with return type!";
    // return keyword should be last statement in the function body
}
// calling the function
let result = greetings();
console.log(result);

function print(){
   console.log(result+ ':PW')

}
print();
// 3. parameterized function & non - returning function
function add(a:number, b:number): void{
let sum = a + b;    
console.log("Sum of "+ a + " and " + b + " is: " + sum);
}   
// provide arguments at the time of calling the function
add(5, 10);
// 4. parameterized function & returning function
function addition(x:number, y:number): number{
    let sum = x + y;
    return sum; // return the sum to the caller
}
let result1 = addition(15, 25);
console.log("Sum of "+ 15 + " and " + 25 + " is: " + result1);
//Anonymous function  - function expression / function without name

// syntax of anonymous function

// the function which is delcareed without a name that function will be stored in a variable 
// The varied where we stored the function becomes the name of the function
// call back function- a function which will be uti;ised as a paremeter to another function is called call back function
// syntax of anonymous function
/*
 funtion(parameters: datatype): returnType(optional) {
    // block of code to be executed
    return 
}
*/


let displayInfo = function(name: string, age : number): void{
    console.log(`Your name is ${name} and your age is ${age}`);
}
displayInfo("John", 30);

// 3. Arrow function - function expression (=>) - Lambda Function - ES 6 - 20215 
// 1. This is also a part of anonymous function and will not have any name 
// 2. This function will be declared by using (=> ) arrow symbol after the paranthesis
// 3. Arrow function use to shorten the number of lines of code 
// 4. If there is only one line of the code inside the function then we can skip the curly braces inside the arrow function
// sysntax 
/*
(parameters: datatype): returnType(optional) => {
    // block of code to be executed
    return 
}
*/

 let Message =(name: string, age: number): void =>  
    console.log(`Your name is ${name} and your age is ${age}`);

Message("Alice", 25);

// defualt parameter and optional parameter 
function sum2(a:number , b:number = 20){
    console.log(a + b);
}sum2 (10);
sum2(20, 30);

// default parameter - A parameter which has a default value 
// Method Overloading  is a process where you can declare the same methode name with different parameter 
// method overloading is not directly suppoter by typecript but we can achieve method overloading by using optional parameters and union types

// optional parameter - A parameter which may or may not be provided with the value at the time of calling the function is called optional parameter
function display (name:string, age?:number){
    console.log (`Your name is ${name} and your age is ${age}`);


}
display("Bob");
display("Alice", 25);


// Assigment  - Complete the display funtion by wirting  the logic to print only name if age parameter is not given and print both name and age if age parameter is given at the time of calling the function


function display1 (name:string, age?:number){
    if(age === undefined){
        console.log(`Your name is ${name}`);
    } else {
        console.log (`Your name is ${name} and your age is ${age}`);
    }   
}
display1("Bob");
display1("Alice", 25);