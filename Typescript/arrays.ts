// Arrays- array is collection of different data types.
// square  bracketds representation of an array.


let arr = [10, 11, 12];
console.log(typeof arr); // [10, 11, 12]
// array is an ordered collection
let array = [10, 11, 12, true , 'Hello', 'student'];
console.log(array); // 10
// we can access elements by using array position (index)
// Index starts from 0 
// array is dynamic size [if you add the size for array increase / if delete the size of array decrease]
// array internally will be strored based on key value pair 0: 10, 1: 11, 2: 12, 3: true, 4: 'Hello', 5: 'student'
//stynx for accessing array element
// arrayName[index]
console.log(array[0]);
// declaration of an array 
//1. using array literal (literal means direct delecaration)
//2. using array constructor - new Array() - this is used to create an array object


//1. using array literal
let arr1 = [10, 20, 30];
console.log(arr1); // [10, 20, 30]
let arr2:number [] = [10, 20, 30, 40, 50];


let arr3:(number| boolean | string )[] = [10, 20, 30, true, 'Hello'];
//2. using array constructor
let arr4 = new Array(10, 20, 30);
console.log(arr4); // [10, 20, 30]
let arr5 = new Array<any>(5,true , 'Hello', true);
console.log(arr5); // [5, true, 'Hello', true]

// using the loop to iterate over the array elements
// length - used to get the number of elements in the array
// 1. Traditional for loop
let arr6 = [10, 20, 30, 40, 50];
console.log(arr6.length); // 5
for(let i = 0; i < arr6.length; i++){
    console.log(arr6[i]);
}
// 2. for of loop
// for of loop is used to iterate over the elements of an array directly without using index
let arr7 = [10, 20, 30, 40, 50];    
for(let element of arr7){
    console.log(element);
}   

// 3. for in loop
// for in loop is used to iterate over the index of an array
let arr8 = [10, 20, 30, 40, 50];
for(let index in arr8){
    console.log(arr8[index]);
}

// add element to the array
// push() - adds an element to the end of the array
let arr9 = [10, 20, 30, true, 'Hello'];  
arr9.push(40,"js"); // [10, 20, 30, 40, 'js']  
console.log(arr9);

// remove element from the array
// pop() - removes the last element from the array
let arr10 = [10, 20, 30, true, 'Hello'];  
let lastElement = arr10.pop(); // [10, 20, 30, true]
console.log(arr10);
console.log('Removed element: ' + lastElement); // 'Hello'

// what is difference between and unshift() - adds an element to the beginning of the array
let arr11 = [10, 20, 30, true, 'Hello'];  
arr11.unshift(5); // [5, 10, 20, 30, true, 'Hello']
console.log(arr11); 
// what is difference between pop() and shift() - shift() - removes the first element from the array
let arr12 = [10, 20, 30, true, 'Hello'];  
let firstElement = arr12.shift();
    console.log(arr12); // [20, 30, true, 'Hello']
// unshift() - adds an element to the beginning of the array
console.log(arr12); // [20, 30, true, 'Hello']
console.log('Removed element: ' + firstElement); // 10  

// splice - used to add or remove elements from the array at a specific index
// syntax - arrayName.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex - the index at which to start changing the array
// deleteCount - the number of elements to remove from the array
// item1, item2, ... - the elements to add to the array at the startIndex   

let arr13 = [10, 20, 30, true, 'Hello'];
// remove 1 element at index 2
arr13.splice(2, 1); // [10, 20, true, 'Hello']  

console.log(arr13);
// add 2 elements at index 2
arr13.splice(2, 0, 40, 'js'); // [10, 20, 40, 'js', true, 'Hello']  
console.log(arr13); 
//slice - used to create a new array by copying a portion of an existing array
// syntax - arrayName.slice(startIndex, endIndex)
// startIndex - the index at which to start copying the array (inclusive)   
// endIndex - the index at which to stop copying the array (exclusive)
let arr14 = [10, 20, 30, true, 'Hello'];
let newArr = arr14.slice(1, 4); // [20, 30, true]
console.log(newArr);    
// indexOf - used to find the index of the first occurrence of an element in the array
// syntax - arrayName.indexOf(element)
// element - the element to search for in the array 
let arr15 = [10, 20, 30, true, 'Hello'];
let index = arr15.indexOf(30);  
console.log(index); // 2

// assigment -1 
// let array10 = [10,20,30,40,50,60,10,70,10,20];
// to find all the occurences of  10 available in arr10 - 0,6,8
//join(separator?) - used to join all the elements of an array into a string
// syntax - arrayName.join(separator)
// separator - the string to separate each element of the array in the resulting string (optional, default is ',')
let arr16 = [ 20,11, 2026];
let joinedString = arr16.join(' - '); // '20 - 11 - 2026'
console.log(joinedString);  

// to string() - used to convert an array into a string
// syntax - arrayName.toString()
let arr17 = [10, 20, 30, true, 'Hello'];
let stringRepresentation = arr16.toString(); // '10,20,30,true,Hello'
console.log(stringRepresentation);


//splice() - it can also add and delete elements form the array at a specific index

// syntax - arrayName.splice(startIndex, deleteCount, ele1, ele2, ...)
// startIndex - the index at which to start changing the array // postion where we want to add / delete element
// deleteCount - the number of elements to remove from the array / number of  elements to be deleted from the array 
// ele1, ele2, ... - the elements to add to the array at the startIndex
console.log('splice learning starts here');
let arr18 = [10,20,40,60,70];
// remove 1 element at index 2
arr18.splice(2, 1,400);
console.log(arr18);

arr18.splice(2, 0, "js", "ts", "react");
console.log(arr18);
// slice() - used to create a new array by copying a portion of an existing array
// syntax - arrayName.slice(startIndex, endIndex)
// startIndex - the index at which to start copying the array (inclusive)
// endIndex - the index at which to stop copying the array (exclusive)
let arr19 = [10, 20, 30, true, 'Hello'];
let newArr1 = arr19.slice(1, 4);  // form index 1 to index 3 (4 is exclusive) - [20, 30, true]
console.log(newArr1);
// indexOf() - used to find the index of the first occurrence of an element in the array
// syntax - arrayName.indexOf(element)
// element - the element to search for in the array 
let arr20 = [10, 20, 30, true, 'Hello'];
let index1 = arr20.indexOf(30);
console.log(index1); // 2
let arr21 = [10, 20, 30, true, 'Hello',44,55,66,77,88,99,10,20,10,43,34,10,20,30,40,50,60,10,70,10,20];
let index2= arr21.indexOf(10,3); // 6
console.log(index2); // 6
// ?  = this symbol is used to make the parameter optional in the function

//last index of() - used to find the index of the last occurrence of an element in the array
// syntax - arrayName.lastIndexOf(element)
// element - the element to search for in the array 
let arr22 = [11,10, 20, 30, true, 'Hello',44,55,66,77,88,99,10,20,10,43,34,10,20,30,40,50,60,10,70,10,20];
//let lastIndex = arr22.lastIndexOf(10,5);
let lastIndex = arr22.lastIndexOf(10);
console.log(lastIndex); // 23
// includes() - used to check if an element is present in the array
// syntax - arrayName.includes(element)
// element - the element to search for in the array 
let arr23 = [10, 20, 30, true, 'Hello'];
let isPresent = arr23.includes(30);
console.log(isPresent); // true 
let isPresent1 = arr23.includes(40,3);
console.log(isPresent1); // false

// join(separator?) - used to join all the elements of an array into a string
// syntax - arrayName.join(separator)
// separator - the string to separate each element of the array in the resulting string (optional, default is ',')  
let arr25 = [10, 20, 30, true, 'Hello'];
let joinedString1 = arr25.join(' - '); // '10 - 20 - 30 - true - Hello'
console.log(joinedString1);
// toString() - used to convert an array into a string
// syntax - arrayName.toString()
let arr26 = [10, 20, 30, true, 'Hello'];
let stringRepresentation1 = arr26.toString(); // '10,20,30,true,Hello'
console.log(stringRepresentation1); 
