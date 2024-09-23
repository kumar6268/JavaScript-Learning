let a = 300; // global scopes

if (true){
    let a = 200  // local scope
    const b = 300
    console.log(a);
    
}

console.log(` c is ${a}`);

function one(){
    const uname = "kumar"

    function two(){
        const website = "javascript"
        console.log(uname);
    }
   // console.log(website);
    
    two()
}
one()


if (true) {
    const uname = 'santhosh'

    if(uname === "santhosh"){
        const website = " javascript"
        console.log(uname + website);
    }
}


// *****************************//

function addOne(num){
    return num + 1
}
console.log(addOne(3));


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(3));
