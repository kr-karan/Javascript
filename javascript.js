//this is a freecode camp tutorial code

var a = 1;
var b = "This is a string";
console.log(a);
console.log(b);
//
console.log(b[0]);

/*
\' single quote
\" Double quote
\r carriage return
\b backspace
\f form feed
*/

//**String**
/*
strings are immutable-can not change the individual character we can change the refrence by assigning it the whole new string
*/ 

//Arrays
var Array = ["hello", "There"];
var Removedarray = Array.shift;
console.log(Removedarray);
console.log(Array)
console.log(Array.shift());
console.log(Array.pop());

//unshift
var Array1 = ["hello", "There"];
console.log(Array1);
Array1.unshift("first");
console.log(Array1);

console.log(JSON.stringify(Array1));

//Objects

var lookup = {
    name: "Karan",
    age : "20",
    add : "ahmedabad",
}
console.log(lookup);
lookup.gf = "no";
console.log(lookup);
delete lookup.gf;
console.log(lookup);
function checkproperty(value){
return lookup.hasOwnProperty(value)
}
console.log(checkproperty("karan"));

//Random function

console.log(Math.random());

function inrange(Min,Max){
    return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}
console.log(inrange(9,25));

//ParseInt

console.log(parseInt(00101,16));


//arrow function
let value = 10;
