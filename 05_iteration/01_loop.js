// for loops
 
// const index = 10;

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element === 5){
//         console.log("5 is printed");
//     }
//     console.log(element);
// }
// // table print using outer and inner for loops
// for (let i = 1; i <= 20; i++){
//     console.log(`Outer loop value: ${i}`);    
//     for (let j = 1; j <= 10; j++){
//         //console.log(`inner loop value is: ${j}`);
//         console.log(i + '*' + j + ' = ' + i*j);
        
//     }
// }

// object pring using loops
let myArray = ["pune", "mumbai","hyd"];

for(let index = 0; index < myArray.length; index ++){
    const element = myArray[index];
    console.log(element);   
}

// breake -- stop the conditon specified condition

// for(let i = 1; i < 20; i++){
//     if(i === 5){
//         console.log(`Detected ${i}`);
//         break
//     }
//     console.log(`Value of is ${i}`);    
// }

// continue -- to skip the specified conditon and continue the loop
for(let i = 1; i < 20; i++){
    if(i === 5){
        console.log(`Detected ${i}`);
        continue
    }
    console.log(`Value of is ${i}`);    
}