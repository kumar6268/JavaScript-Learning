const programming = ["JS","RB","PY","TS"];

// Option 1
programming.forEach((value) => {
    console.log(value);
});

// Option 2
// function printMe(val){
//     console.log(val);
// }
// programming.forEach(printMe);

programming.forEach((value, index, arr) => {
    console.log(value,index,arr);
});

const myCodingArrObj = [
    {
    languageName:"JavaScript",
    languageFileName:"js"
    },
    {
    languageName:"TypeScript",
    languageFileName:"ts"
    },
    {
    languageName:"Java",
    languageFileName:"java"
    },
    {
    languageName:"angular",
    languageFileName:"ag"
    }
]

myCodingArrObj.forEach((item) =>{
    console.log(item.languageName);
    
})
