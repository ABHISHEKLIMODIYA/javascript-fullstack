//singleton //made by constructor 
// //literal ki tarah karte h to singleton nhi bantah

//object literals
const sym =Symbol("key1")
const jsUser={
    name:"abhishek",
    "full Name":"Abhishek Limodiya",
    [sym]:"mykey1",
    age:"19",
    mail:"abhi@GOOGLE.COM",
    isLoggedIn: false,
    lastLoginDays:["momday","sATUEDAY"]
}
console.log(jsUser.mail);//not right way but u should used
console.log(jsUser['mail']);//without quotes mail give error

// console.log(jsUser.full Name)//this give error
// console.log(jsUser."full Name")//this give error


console.log(jsUser["full Name"])
// //symbol
// console.log(jsUser.sym);// mykey1 but not symbol as datatype
// console.log(typeof jsUser.sym);
console.log(jsUser[sym])
console.log(typeof jsUser[sym]);
//**********************important above  */
jsUser.mail="abhi@gmail.com"
// Object.freeze(jsUser)
jsUser.mail="abhi@chatgpt.com"//after freeze not chanf=ged



console.log(jsUser);
jsUser.greeting=function(){
    console.log("hello baccho");
    
}
jsUser.greeting2= function(){
    console.log(`hello baccho1 ${this.name}`);//string to backticks
    
  }
console.log(jsUser.greeting());
console.log(jsUser.greeting2())//isme error ayega kyuki freeze h object
