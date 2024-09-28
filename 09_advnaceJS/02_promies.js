const promises = new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Asynce 1");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Asynce 2");
    
});

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(
            {
                uName:"kumar",
                email:"kumarsanthosh05299@gmail.com"
            }
        )
    }, 1000)
})

promiseTwo.then(function(user){
    console.log(user);
    
})

const promiseTree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                uName:"kumar",
                pass:"123"
            })
        } else {
            reject("Error")
        }
    }, 1000)
})

promiseTree.then((user) =>{
    console.log(user);
    return user.uName  
}).then((uName) =>{
    console.log(uName);
}).catch((error) =>{
    console.log("error 1");
}).finally(() =>{
  console.log("The promise is resolved or rejected");
})

const promiseFour = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error2 = true
        if(!error2){
            resolve({
                uName:"santhosh",
                pass:"123"
            })
        } else {
            reject("Eroor JS wrong")
        }
    }, 1000)
})

async function five(){
   try {
    const resp = await promiseFour
    console.log(resp);
   } catch (error) {
    console.log(error);
   }
}
five();

async function getAllUse(params) {
    try {
        const res = await fetch('https://api.github.com/users/kumar6268')
        const data =  await res.json()
        console.log(data);
    } catch (error) {
        console.log("eroor",error);
    }
}

// getAllUse();
fetch('https://api.github.com/users/kumar6268').then((response) =>{
    return response.json()
}) .then((userResonse) =>{
    console.log(userResonse);
    
})