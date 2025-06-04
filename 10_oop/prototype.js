// let myName="ABHISHEK     "
// let mySurname="limodiya    "
// console.log(myName.trueLength);


let hero =["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",


    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.abhishek=function(){
    console.log("abhishek present in all object");
    
}
Array.prototype.hiiAbhi=function(){
    console.log("hii abhishek");
    
}
//heroPower.abhishek()
hero.abhishek()//both  ka same output
//object me value  inject ki to wah sabhi array ,string ,function me accesss hogi


hero.hiiAbhi()//output hii abhishek
// heroPower.hiiAbhi()///error


//inheritance
const User={
    name:"chai"
}
const Teacher ={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"js Assignment",
    fullTime:true
    // __proto__:(TeachingSupport)

}
Teacher.__proto__=User


//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername="chai      "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name1}`);
    console.log(`the true length is:${this.trim().length}`);
    
    
    
}
anotherUsername.trueLength()
"abhishek  ".trueLength()
"as    ".trueLength()