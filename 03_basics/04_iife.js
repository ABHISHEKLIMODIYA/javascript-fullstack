//immediately invoked finction expression(IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
// chai()
//iife -when function write immediately executed
//global scope me bahut se variable declared hot h jinki wajah se pollution ko hatane ke liye
//node environment me this refer to {}
//iske end me ; required h to end invoked function nhi to erro dega
(function chaiaurcode(){
    console.log(`DB CONNECTED`);
    
})();

(function code(){//iife
    console.log(`DB CONNECTED`);
    
})();

( (name)=>{//unNAMED IIFE
    console.log(`DB connected tei ${name}`);
    
}

)("abhidh")

