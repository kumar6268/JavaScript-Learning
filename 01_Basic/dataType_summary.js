/* 7 type primitive data type

1) String
2) Number
3) Boolean
4) null
5) undefined
6) Symbol
7) BigInt

*/

const isNumber =  12333;
const str = "string";
const isLoggedIn =  false;
let useEmail;

const id =  Symbol('123')
const anotherID = Symbol('123')

// console.log(id === anotherID);


/* Reference (Non primitive)

1) Array
2) Object
3) Function

*/

const heros = ["a","b","c","d"];
let myObj = {
    a:"a",
    age:22
}


const myFunction  = function (){
    console.log("Hello World")
}

myFunction()