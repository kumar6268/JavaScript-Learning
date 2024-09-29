function multipleByFive(n){
    return n * 5
}
multipleByFive.power = 2;

console.log(multipleByFive(5));
console.log(multipleByFive.power);
console.log(multipleByFive.prototype);


function createUser(uName, price){
    this.uName = uName
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.price}`);
}

const a = new createUser("chai", 25);
const b = new createUser("tea", 230)

a.printMe()
b.increment()

/* 
Here's what happens behind the screnes when the new keyword is used
A new object is created: The new keyword initiate the creation
of a new javascript object

A prototype is linked: The newly created object gets linked to the prototype property
of the constructor function. This mean that is has access to properties and method defined on this constructor
prototype.

The constructor id called: The constructor function id called with the
specified arguments and this is bound to the newly created object. if
no explicite return valur id spcified from the constructor JS
assumes this, the newly created object to be the intended return value

The new object is returned: After the constructor fucntion had been
called , if is doesn't return a non-primitive value 
(object, array, function, ext), the newly created object is returned
*/