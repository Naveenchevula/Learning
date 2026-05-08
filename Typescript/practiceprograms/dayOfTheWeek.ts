//// Day of Week: Use a switch statement to print the day name (e.g., 1 for "Monday")
let dayNumber: number = 3;
let dayName: string;    
switch (dayNumber) {
    case 1:
        dayName = 'Monday';     
        break;
    case 2:

        dayName = 'Tuesday';
        break;                          
    case 3:                             
        dayName = 'Wednesday';  
        break;  
    case 4: 
        dayName = 'Thursday';   
        break;  
    case 5: 
        dayName = 'Friday'; 
        break;      
    case 6:         
        dayName = 'Saturday';   
        break;              
    case 7:             
        dayName = 'Sunday'; 


        break;  
    default:
        dayName = 'Invalid day number'; 
}               

console.log('Day number: ' + dayNumber + ', Day name: ' + dayName); 


console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=');
 switch (dayNumber){
case 1:
console.log( 'Number is '+dayNumber+' Day : Monday ');
break;
case 2: 
console.log( 'Number is '+dayNumber+' Day : Tuesday ');
break;
case 3:
console.log( 'Number is '+dayNumber+' Day : Wednesday ');
break;
case 4:
console.log( 'Number is '+dayNumber+' Day : Thursday  ');
break;
case 5:
console.log( 'Number is '+dayNumber+' Day : Friday  ');
break;
case 6:
console.log( 'Number is '+dayNumber+' Day : Saturday  ');
break;
case 7:
console.log( 'Number is '+dayNumber+' Day : Sunday   ');
break;
default : 
console.log('Number is '+ dayNumber  + ' : Invalid input  Number ');
 }