function addTwoNo(n1,n2){
    return n1 + n2
};

const result =  addTwoNo(5,6)
console.log(result);

function loginMessage(name){
    if(!name){
        console.log(`Please enter ${name} valid name`);
        return  
    }
    return `${name} valid name`
}

console.log(loginMessage("kumar"));


function calculate(...num1){
    return num1
}

console.log(calculate(200,300,400));

const userName = {
    uname:"kumar",
    price:200
}

function handleObj(anyObj){
    console.log(`uname is ${anyObj.uname} and price is ${anyObj.price}`);
    
}

handleObj(userName)


const myNewArray = [200,300,500];

function arrayList(listOfArray){
    return listOfArray[2];
}

console.log(arrayList(myNewArray));
console.log(arrayList([200,300,400]));
