const myNum = [1,2,3];

const myTotal = myNum.reduce((accValue, currValue) =>{
    console.log(`accValue: ${accValue} and currValue: ${currValue}`);
    return accValue + currValue    
}, 0);

console.log(myTotal);

const myShoppingPrice = [
    {
        itemName:"Nike",
        priceValue:2000
    },
    {
        itemName:"RedTep",
        priceValue:4000
    },
    {
        itemName:"Reebook",
        priceValue:6000
    }
];

const priceTotal = myShoppingPrice.reduce((acc, item) => 
    acc + item.priceValue,0);

console.log(priceTotal);
