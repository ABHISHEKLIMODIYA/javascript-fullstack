//crating the promises =>ye call back leta h
const promiseOne=new Promise(function(resolve,reject){
    //do an async task 
    //DB calls,cryptography ,network
    setTimeout(function(){
        console.log(`async task is comlete`);
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})//resolve ka connection   itna karpe par bhi async task is comlete
// ye to print hoga but promise consumd nhi hoga  bcz hamne then and resolve ko connect kia hi nhi
// connect karne ke liye hum resolve() function ka use karte h`


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
        
    },1000)
}).then(function(){
    console.log("async two resolved");
    
})
//output when 1000 all time async task is comlete
// async task is comlete
// promise consumed
// async task two
// async two resolved
//when time value changed
// async task two

//when time changes 1500 1000// async two resolved
// async task is comlete
// promise consumed'

const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({ username:"abhishek",email:"abhisheklimodiya@gmail.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    

})


const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
       let error =true
       if(!error){
        resolve({username:"abhis",pass:"wewerer2344"})
       }
       else{
        reject('error somethong getting wrong')
       }
    },1000)
})

promiseFour.then((user)=>{
     console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("mae to aunga chale promised resolved or rejected"));

//jha pe chaning karna h wha new line se start kar sakte accha lagega


const promiseFive=new Promise(function(resolve,reject){
      setTimeout(function(){
       let error =true
       if(!error){
        resolve({username:"javascript",pass:"omega3211"})
       }
       else{
        reject('error js wentt wrong')
       }
    },1000)

});
//async
 //UnhandledPromiseRejection: This error originated either by throwing 
    // inside of an async function without a catch
    //  block, or by rejecting a promise which was 
    // not handled with .catch(). The promise rejected with the reason "
    // error js wentt wrong".
async function consumePromiseFive(){
    try{
      const response= await promiseFive
      console.log(response)
     }catch(error){
         console.log(error)
    }}
   
    consumePromiseFive()




    // async function getAllusers() {
    //    try{
    //     const response=await fetch('https://jsonplaceholder.typicode.com/users')
        
         
    //     const data=await response.json()
    //      console.log(data);
        
    //    }catch(error){

    //     console.log("E:",error);
        
    //    }
        
    // }
    // getAllusers()
    console.log("abhishek")
    //code time le rha h response alag format me h
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        
    })
    .catch((error)=>console.log(error));
    