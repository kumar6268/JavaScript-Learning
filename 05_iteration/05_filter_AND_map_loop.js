//const myNum = [1,2,3,4,5,6,7,8];

// const newNum = myNum.filter((value) => {
//     return value
// })
//console.log(newNum);
const newNum1 = [1,2,3,4,5,6]
newNum1.filter((number) => {
    if (number > 3) {
        newNum1.pop(number)
    }
})

console.log(newNum1);


// map

 const myNumber1 = [1,2,3,4,5,6,7,8];
// const newNumer1 = myNumber1.map((num) =>{
//     return num + 10;
// })

const newNum = myNumber1
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newNum);
