let myName = "kumae    ";

console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];

let herPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.kumar = function(){
    console.log(`kumar is present in all object`);
}

herPower.kumar() // Object access all object and array method data
myHeros.kumar()

Array.prototype.heyKumar = function(){
    console.log(`Hey kumar`);
}

//herPower.heyKumar()
myHeros.heyKumar() // Array only access the Array data not object data


const teacherSupport = {
    isAvailable: false
}

const Teacher = {
    makeVideo:true
}

const TASupport = {
    maskeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teacherSupport,
}

// inheritance
const User = {
    name:"kumar",
    email:"abcd@gmail.com"
}

Teacher.__proto__ = User;
// modern syntax
Object.setPrototypeOf(teacherSupport, Teacher);

let anotherUserName = "Hello           ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is :${this.trim().length}`);
}

anotherUserName.trueLength();
"kumar".trueLength();
"tea".trueLength();