// find number of digits in a number

let num2 = 12345
let count1 = 0;

while (num2 >0){
    num2 =Math.floor(num2/10);// remover the last digit 
    /* 12345/10 = 1234.5 => 1234
    count = 1
    1234/10 = 123.4 => 123
    count = 2
    123/10 = 12.3 => 12
    count = 3
    12/10 = 1.2 => 1
count = 4
    1/10 = 0.1 => 0  // here the loop will stop as num is no more greater than 0
count = 5

    */
    count1++; // increment the count of digits
   
}
console.log("Number of digits in the number is:", count);
//===================================================
let num1   = 12345
let count2 = 0
while (num1>0){
    num1 = Math.floor(num1/10)
    count2 ++
}
console.log('Number of Digits in number = '+ count2)