// Immediately Invoke Function Expression (IIFE)

(function tea(){
    // IIFE
    console.log("Connected");
    
})();

( (name) => {
    console.log(`Connected again ${name}`);
    
})("DB");


