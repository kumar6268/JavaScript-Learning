const user = {
    uname:"kumar",
    price:200,

    welcomeMsg: function(){
        console.log(`${this.uname}, welcome to website`);        
    }
}

user.welcomeMsg();
user.uname = "santhosh";
user.welcomeMsg()

const tea = () => {
    let uname = "kumar"
    console.log(this.uname);
}
tea()


const addTwo = (num1,num2) => {
    return num1 + num2 // explisite
}

console.log(addTwo(3,4));

const addData = (n1,n2) => (n1+n2) // implicit 

console.log(addData(5,7));
