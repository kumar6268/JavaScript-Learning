/* falsy values
false, 0, -0, bigInt, 0n, "", null, undefined, NaN

truethy value
'', "0", 0, 'false', " ", [], {}, function(){}
*/
const userEmail = ""

if (userEmail.length === 0){
    console.log("empty length");
}

const myObej = {};

if (Object.keys(myObej).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? null ?? 20
console.log(val1);


// Ternary operator

// condion ? true : false;

const price = 1010;

price === 100 ? console.log("yes") : console.log("No");


