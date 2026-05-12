// print star pyramid
let rows=5;
for(let i=1; i<=rows; i++){
    let str=""; 
    for(let j=1; j<=i; j++){
        str = str+  "* "; // explaination of str = str + "* "
        /* Initially str is empty string ""
 when i=1, j=1, str = "" + "* " => str = "* "
 when i=2, j=1, str = "* " + "* " => str = "* * "
 when i=3, j=1, str = "* * " + "* " => str = "* * * "
 when i=4, j=1, str = "* * * " + "* " => str = "* * * * "
 when i=5, j=1, str = "* * * * " + "* " => str = "* * * * * "   
        */
    }
    console.log(str);
}