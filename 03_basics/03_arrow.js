 const user ={
    username:"abhijeet",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
        
    }
 }//arrow function ke andar this nhi hota
user.welcomeMessage()
user.username="abhishek"
user.welcomeMessage()
//  console.log(this)

function chai(){
    let username="abhishek"
    console.log(this);
       console.log(this.username);

    
}
 chai()
 const tea = () => {
    let username="abhishek"
    console.log(this);
    console.log(this.username);

    
}
tea()

//Arrow functions
const addTwo =(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));
//implicit return 
const addtwo =(num1,num2)=>num1+num2


console.log(addtwo(3,4));
//implicit return 
const adtwo =(num1,num2)=>
    (num1+num2)


console.log(adtwo(3,4));
const dtwo =(num1,num2)=>
    (num1+num2)


console.log(dtwo(3,4));
//current context ko refer karne ke liye this keyword ka use  karte h
//browser me this ka current context window hota h jisse hum function accesse karte h