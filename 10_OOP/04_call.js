function setUserName (name){
    this.name = name
}

function createUser(name, email, pass){
    //this.name= name
    setUserName.call(this, name)
    this.email = email
    this.pass = pass
}

console.log( new createUser("kumar", "abc@gmail.com","123"));
