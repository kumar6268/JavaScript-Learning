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





// ***************************************//

// Stack => Primitive data type store here


let myName = "Santosh";  // it can not be change while assinging new variable value
let myAnotherName = myName;
myAnotherName = "kumar";
console.log(myName);
console.log(myAnotherName);


// Heap Non-Primitive data type store here

let userOne = {
    name:"kumar",
    mobileNo:7777777778
}

let userTow = userOne

userTow.mobileNo = 7777777777;

console.log(userOne.mobileNo);
console.log(userTow.mobileNo);




