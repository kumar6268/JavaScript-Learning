const user = {
    uName:"kumar",
    logginIn:true,
    singIn:"Yes",

    getUserDtls:function(){
        console.log(`Got user details from db ${this.uName}`);
        console.log(this);
    }
}

//console.log(user.logginIn);
//console.log(user.getUserDtls());
//const promiseOne = new Promise(); // new is a constraction
//const date = new Date();

 class User {
    constructor(Uname, loginCount, isLoggedIn) {
        this.Uname = Uname;
        this.logginIn = loginCount,
        this.isLoggedIn = isLoggedIn;
    }
}
 const userOne = new User("Kumar", 2, true)
 console.log(userOne);
 