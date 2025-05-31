//primitive
//7 types:String,Number,Boolean,null ,undefined,symbol,Bigint
//reference-non primitive
//array object functions
//dynamic typed language
const outsidetemp=null;
let usermail;
const id=Symbol("123")
const i=Symbol("123")
console.log(i==id);
const BIGNUMBER=44554333443333n
const heros=["abhi","umesh"];
let myobj={
    name:"abgi",age:22
}
const myfunction=function(){
    console.log("hello world")
}
console.log(typeof BIGNUMBER);
console.log(typeof heros);
console.log(typeof myfunction);
console.log( typeof outsidetemp)//object bcz a bug in language early design(which was never fixed for backward compatibity )
//*************************************************************** */
//stack->primitive
//heeap->non primitive
let name="abhi"
let nam= name
nam="abhishek"
console.log(name);
console.log(nam);//copy milti h
let u1={
    email:"xyz@gmi.com",
    age:20
}
let u2=u1;
u2.age=95
console.log(u1.age);
console.log(u2.age);//provide refrence value changes impacted originally








