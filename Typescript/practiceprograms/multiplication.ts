// Multiplication Table: Print the multiplication table (1-10) for a given number
let number1 = 5; // You can change this value to print the multiplication table for a different number

for (let i = 1; i <= 10; i++) {
    console.log(number1 + ' x ' + i + ' = ' + (number1 * i));
}
//FizzBuzz: Print numbers 1-100, substituting "Fizz" for multiples of 3, "Buzz" for 5, and "FizzBuzz" for 15.
console.log('FizzBuzz from 1 to 100:');

for (let i = 1; i <= 100; i++) {        
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    }       


    else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }           
}