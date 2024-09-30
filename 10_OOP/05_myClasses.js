// ES6

// class User {
//     constructor(name, pass, email){
//         this.name = name
//         this.pass = pass
//         this.email = email
//     }

//     encryptPass(){
//         return `${this.pass} abc`
//     }

//     changeName(){
//         return `${this.name.toUpperCase()}`
//     }
// }
// const test =  new User("kumar", "123", "abc@gmail.com")
// console.log(test.encryptPass());
// console.log(test.changeName());


/// behind the screne


function Users(name, pass, email){
    this.name = name
    this.pass = pass
    this.email = email
}

Users.prototype.encryptPass = function(){
    return `${this.pass} abc`
}

Users.prototype.changeName =  function(){
    return `${this.name.toUpperCase()}`
}

const test =  new Users("kumar", "123", "abc@gmail.com")
console.log(test.encryptPass());
console.log(test.changeName());