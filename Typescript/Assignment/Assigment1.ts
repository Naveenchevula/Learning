//find sum of 1st 25 numbers 
console.log('Assigments 1 <sum of first25numbers>')
let sum = 0;
for (let i = 1; i <= 25; i++) {
    sum = sum +  i;
}
console.log("Sum of first 25 numbers is:", sum);
// count digits in a number
console.log('Assigments 1.1 <count digits in a number>')
let num = 12345
let count = 0
while (num>0){
    num = Math.floor(num/10)
    count ++
}
console.log('Number of Digits in number = '+ count)

 // print 5th table example 5x1 = 5
console.log('Assigments 1.2 <print 5th table>')
let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log(n + ' x ' + i + ' = ' + (n * i));
}
// print star pyramid
console.log('Assigments 1.3 <print star pyramid>')
let m=5; 
for(let i=1; i<=m; i++){
    let str=""; 
    for(let j=1; j<=i; j++){
        str = str+  "* "; 
    }
    console.log(str);
}   