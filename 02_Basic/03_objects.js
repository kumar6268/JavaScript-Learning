// singleton



// object literals

const myStr = Symbol("key1")

const myObj = {
    name:"santosh",
    [myStr]:"key1",
    dob:"25-08-1997",
    location:"pune",
    isLoggedIn:true,
    lastDayLogin:["Monday","Sunday"],
    "my Full Name":"santhosh kumar"
}

console.log(myObj.name);
console.log(myObj["name"]);
console.log(myObj[myStr]);
console.log(myObj["my Full Name"]);

myObj.location = 'hyd';
//Object.freeze(myObj);
myObj.location = "Mumbai";
console.log(myObj);

myObj.greeting = function(){
    console.log("Hello user",this.name);
    
}

console.log(myObj.greeting());
