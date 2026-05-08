//// Factorial Calculator: Calculate the factorial of a number using a while loop.

let num = 3; // You can change this value to calculate the factorial for a different number
let factorial = 1;
let i = 1;  
while (i <= num) {
    factorial *= i; 
    i++; 
}

console.log('Factorial of ' + num + ' is: ' + factorial);