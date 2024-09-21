const name = "kumar";
const lastName = "santosh";

console.log(`Hello my first name is ${name} and lastName is ${lastName}`);
  

const gameName = new String('kumar-k-o');
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));
console.log(gameName.toUpperCase());

const newString  = gameName.substring(0,5);
console.log(newString);

const anotherSrting =  gameName.slice(1, 3)
console.log(anotherSrting);

const ulr = "https://kumarsantosh.com/%2gmai.com";
console.log(ulr.replace('%2', ''));
console.log(ulr.includes('sdfd'));
console.log(gameName.split('-'));
