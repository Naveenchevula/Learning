let num1= 2
let num2= 3
// Addition[add value ] or concatenation [any value in the form of string]
console.log(num1 + num2);
//subtraction
console.log(num1 - num2);
// multiplication
console.log(num1 * num2);
// division
console.log(num1 / num2); //2/3 = 0.6666666666666666
// modulus
console.log(num1 % num2); //  2% 3= 2
//exponentiation
console.log(num1 ** num2); // 2**3 = 8
//increment
num1++
console.log(num1);  //num1 = 3
//decrement
num2--
console.log(num2);  //num2 = 2
//pre-increment
console.log(++num1); //num1 = 4
//post-increment
console.log(num1++); //num1 = 4, but it will be 5 in the next line
console.log(num1); //num1 = 5
//pre-decrement
console.log(--num2); //num2 = 1
//post-decrement
console.log(num2--); //num2 = 1, but it will be 0 in the next line
console.log(num2); //num2 = 0
console.log("*******************************");
//comparison operators
let a = 10
let b = 20            
console.log(a == b);  //true, because == operator does type coercion and converts b to a number before comparison
console.log(a === b); //false, because === operator does not do type coercion and compares both value and type
console.log(a != b);  //false, because != operator does type coercion and converts b to a number before comparison
console.log(a !== b); //true, because !== operator does not do type coercion and compares both value and type
console.log(a > b);   //false, because > operator does type coercion and converts b to a number before comparison
console.log(a < b);  //false, because < operator does type coercion and converts b to a number before comparison   
console.log("**************logical operators*****************");
//logical operators
let x = true
let y = false
console.log(x && y); //false, because && operator returns true only if both operands are true
console.log(x || y); //true, because || operator returns true if at least one operand is true
console.log(!x);                //false, because ! operator returns true if the operand is false and false if the operand is true
console.log(!y);                //true, because ! operator returns true if the operand is false and false if the operand is true            
