// Assignment 1 
// to find out all the index of 10 availbale inside arr24
// let arr24 = [10,20,30,40,50,60,10,70,10,20]

let arr24 = [10,20,30,40,50,60,10,70,10,20];
let elementToFind = 10;
for(let index in arr24){
    if(arr24[index] === elementToFind){
        console.log('Element ' + elementToFind + ' found at index: ' + index);
    }   

}   


//====================
console.log('for loop example')



for(let i = 0; i<=arr24.length; i++){
    if(arr24[i] === elementToFind){
        console.log('Element ' + elementToFind + ' found at index: ' + i);
    }
}