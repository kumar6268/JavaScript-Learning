const array = [1,2,3,4,5];

for (const element of array) {
    console.log(element);
}

const greeting = "Hello Word!";
for (const element of greeting) {
    console.log(`Each char is ${element}`);   
}

const map = new Map();
map.set('IN', "IND");
map.set('USA',"United States of America");
console.log(map);


for (const [key, value] of map){
    console.log(key, ':-', value);
}

const myObj = {
    "game":"NFS",
    "game2":"spiderman"
}

for (const key in myObj) {
    console.log(`${key} of ${myObj[key]}`);
}

const programming = ["JS","RB","PY","TS"];

for (const key in programming) {
    console.log(programming[key]);
}

const map1 = new Map();

