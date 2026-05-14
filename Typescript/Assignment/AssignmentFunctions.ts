//Assigment  - Complete the display funtion by wirting  the logic to print only name if age parameter is not given and print both name and age if age parameter is given at the time of calling the function
console.log("------------With Normal Function------------------");
function display4 (name:string, age?:number){
    if (age === undefined){
        console.log(`Your name is ${name}`);
    } else {            

        console.log (`Your name is ${name} and your age is ${age}`);
    }   

}

display4('Sathya');
display4('Sathya', 32);

console.log("------------With Arrow Fution------------------");
const  display2= (name:string, age?:number) =>{

if (age===undefined){
    console.log(`your nameis ${name}`);
}else{
    console.log((`your name is  ${name} and your age is ${age}` ));
}
}


display2('Naveen');
display2('Naveen', 30);