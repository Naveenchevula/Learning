// uisng if else statement 
let number: number = 11;
if (number % 2 === 0) {
    console.log(number + ' is an even number.');

} else {
    console.log(number + ' is an odd number.');
}

console.log('Using for loop to check even or odd numbers from 1 to 10:');

for (let i = 1; i <=10;i++){
    if (i%2 ==0){
        console.log(i + ' is an even number.');
    } else {
        console.log(i + ' is an odd number.');  
    }
}