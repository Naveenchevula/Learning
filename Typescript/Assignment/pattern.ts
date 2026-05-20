// left pattern
/*
*
**
***
****
*****
*/
let row = 5;

for(let i = 1; i <= row; i++){
    let pattern = '';       
    for(let j = 1; j <= i; j++){
        pattern += '*'; // pattern = pattern + '*'
    }

    console.log(pattern);
}
// right pattern
let row1 = 5;

for(let i = 1; i <= row1; i++){
    let space = ' '; // space variable to store spaces
    let pattern1 = ''; // pattern variable to store stars
    for(let j = 1; j <= row1 - i; j++){
        space += ' '; // adding spaces to the space variable
    }

    for(let k = 1; k <= i; k++){
        pattern1 += '*'; // adding stars to the pattern variable
    }       
    console.log(space + pattern1); // printing spaces followed by stars
}   