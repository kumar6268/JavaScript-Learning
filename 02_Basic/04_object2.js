// const tinder = new Object(); // singalton object
const tinderUser = {}; // non singalton object

tinderUser.id = "123abcd";
tinderUser.name = "kumar";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


const regular = {
    email:"abcd@gmail.com",
    fullName:{
        userName:{
            first:"kumar",
            last:"abcd"
        }
    }
}

console.log(regular.fullName.userName.first);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);


const users = [
    {1:"a"},
    {2:"b"},
    {3:"c"},
    {4:"d"}
]

users[1][1];
users[2][2];

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructor in object

const cource ={
    coure:"reactJS",
    fees:"1000",
    lecture:"santosh"
}

const {lecture:name} = cource

console.log(name);
