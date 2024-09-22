const array1 = [1,2,3,4,5];
const array2 = [6,7,8];

// array1.push(array2)
const allArray = array1.concat(array2) // concatenate array
//console.log(array1);
console.log(allArray);

// spread array
const all_New_Array = [...array1,...array2];
console.log(all_New_Array);

// multiple array convert in single array
const another_array = [1,2,3,4,[5,6],7,[8,9,[5,6]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("santosh"));
console.log(Array.from("kumar"));


// below array is used to convet given multiple variable in single array
let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a,b,c));


