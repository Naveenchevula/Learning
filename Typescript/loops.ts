// Loops - will execute the block {....} of code multiple times until a specified condition is false

// For Loop
// maintability 
// avoid duplication of code 
// for loop
    // a. for loop >> tradational for loop 
     // when we know that how many times we have to run the iteration
    // b. for of loop
    // c. for in loop
// while loop
  // when we don't know how many times we have to run the iteration 

// do while loop

// for loop 
// Syntax

// let n - declaration of variable
// let m = 90 - Intialization of variable
/* for (initilization; condition; increment/decrement) {
////break - to break the loop
// continue - to skip the current iteration and move to the next iteration
    // code to be executed
} */
//while loop
// syntax

/* while (condition) {
    // code to be executed
} */    
let attempt = 0
while (attempt < 3) {
    console.log('Attempt '+attempt+': Please enter your password.'); 
    attempt++;
}
//do while loop
// syntax               
/* do {
    // code to be executed
} while (condition); */

//example of do while loop
console.log('Do While Loop Example:');
let count = 0;      
do {
    console.log('Count is: ' + count); 
    count++;
} while (count < 5);            
 console.log('Attempts ended '); 
