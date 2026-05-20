// let row = 5;

for(let i =1;i<=5;i++){
    let str="";
    for(let j =1; j<=i;j++){
        str = str + "*" ;

    }
    console.log(str);
}
console.log('left  angle triangle');

for(let i =5;i>=1;i--){
    let str="";
    for(let j =1; j<=i;j++){
        str = str + "*" ;

    }
    console.log(str);
}


console.log('right angle triangle');
let row = 5;

for (let i = 1; i <= row; i++) {

    let space = '';
    let pattern = '';

    // spaces
    for (let j = 1; j <= row - i; j++) {
        space += ' ';
    }

    // stars
    for (let k = 1; k <= i; k++) {
        pattern += '*';
    }

    console.log(space + pattern);
}