// remove duplicate elements from an array  using set 

let arr123 = [10, 20, 30, 20, 40, 10, 50];

let uqnique =[...new Set(arr123)];
console.log(uqnique); // [10, 20, 30, 40, 50]
// length of unique array
console.log(uqnique.length); // 5


// remove duplicate elements from an array using filter method

let arr124 = [10, 10,20, 30,30, 20, 40, 10, 50];
let unique2 = arr124.filter((value,index,arr) =>arr.indexOf(value) === index);
console.log(unique2);

