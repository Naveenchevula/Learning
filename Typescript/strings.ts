// squence of characters called string  - string , text , word
// 1. single quote ('') - used to define a string literal
// 2. double quote ("") - used to define a string literal
// 3. backticks (``) - used to define a template literal
let str1 = 'Hello'; // string literal using single quotes
let str2 = "World"; // string literal using double quotes

// there are 2 main purpose of defining the string by using backtick

// 1. multiline string - allows to create a string that spans multiple lines without using escape characters
let str3 = `This is a 
multiline string 
using backticks.`;
console.log(str3);  

// 2. string interpolation [string parameterisation]- allows to embed expressions inside a string using ${} syntax
let name11 = 'Alice';
let age = 30;
let str4 = `My name is ${name11} and I am ${age} years old.`;
console.log(str4); // My name is Alice and I am 30 years old.

// 1. length - used to get the number of characters in a string
let str5 = 'Hello World';
console.log(str5.length); // 11

// 2. charAt() - used to get the character at a specific index in a string
let str6 = 'Hello World';
console.log(str6.charAt(0));
console.log(str6.charAt(6)); // W
//let str7 = 'abcdabcd';
// out put  - a2b2c2d2
// 3. concat(str1, str2, ...) - used to concatenate two or more strings
let str8 = 'Hello';
let str9 = 'World';
let str10 = str8.concat(' ', str9);
console.log(str10); // Hello World  
// 4. includes()
//5. indexOf()
//6. lastIndexOf()

//what is difference between slice() and substring() - both are used to extract a portion of a string and return it as a new string
// syntax - stringName.slice(startIndex, endIndex)
// startIndex - the index at which to start extracting the string (inclusive)

//7.slice() - restruns a portion of a string based on the start and end index. It can accept negative index which counts from the end of the string
let str11 = 'Hello World';
let slicedStr = str11.slice(7,11);
console.log(slicedStr); // Hello

// substring() - returns a portion of a string based on the start and end index. It does not accept negative index and treats them as 0
let str12 = 'Hello World';
let substringStr = str12.substring(11,6);
console.log(substringStr); // World
// 9. startsWith() - used to check if a string starts with a specific substring
let str13 = 'Hello World';
console.log(str13.startsWith('H')); // true
console.log(str13.startsWith('World')); // false
// 10. endsWith() - used to check if a string ends with a specific substring
let str14 = 'Hello World';
console.log(str14.endsWith('d')); // true
console.log(str14.endsWith('Hello')); // false
// 11. toUpperCase() - used to convert a string to uppercase
let str15 = 'Hello World';
console.log(str15.toUpperCase()); // HELLO WORLD
// 12. toLowerCase() - used to convert a string to lowercase
let str16 = 'Hello World';
console.log(str16.toLowerCase()); // hello world

//13. trim() - used to remove whitespace from both ends of a string
let str17 = '   Hello World   ';
console.log(str17.trim()); // 'Hello World'
    // 15.trimStart() - used to remove whitespace from the beginning of a string
let str18 = '   Hello World   ';
console.log(str18.trimStart()); // 'Hello World   '
// 16.trimEnd() - used to remove whitespace from the end of a string
let str19 = '   Hello World   ';
console.log(str19.trimEnd()); // '   Hello World'   

// 17. repeat(count) - used to create a new string by repeating the original string a specified number of times
let str20 = 'Hello ';
console.log(str20.repeat(3)); // Hello Hello Hello  
// 18.split(separator) - used to split a string into an array of substrings based on a specified separator
let str21 = 'Hello World';
let arr45 = str21.split(' ');    
console.log(arr1); // ['Hello', 'World']
let str22=  "apple banana orange";
str22.split(" "); // ['apple', 'banana', 'orange']
console.log(str22.split(' ')); // ['apple', 'banana', 'orange']
let email = "praveen@qamitra.com";

let emailParts = email.split('@');
console.log(emailParts); // ['praveen', 'qamitra.com']

emailParts[1].split('.'); // ['qamitra', 'com']
console.log(emailParts[1].split('.')[0]); // 'qamitra'

// 19. replace(searchValue, newValue) - used to replace a specified value in a string with a new value
let str23 = 'Hello World';
let newStr = str23.replace('World', 'TypeScript');
console.log(newStr); // Hello TypeScript
// 20. replaceAll(searchValue, newValue) - used to replace all occurrences of a specified value in a string with a new value
let str24 = 'Hello World, Hello Everyone';
let newStr2 = str24.replaceAll('Hello', 'Hi');
console.log(newStr2); // Hi World, Hi Everyone
