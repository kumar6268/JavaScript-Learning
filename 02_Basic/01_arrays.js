const myArr = [1,2,3,4,5,6];
myArr.push(7);
myArr.pop(7)
myArr.shift();
console.log(myArr.includes(4));
console.log(myArr.indexOf(5));


/// slice, 
const myArr1 = myArr.slice(1,4)

console.log("1",myArr1.slice(1,4));
// splice
const myArr2 = myArr.splice(1,4)
console.log("2",myArr2.splice(1,4));

