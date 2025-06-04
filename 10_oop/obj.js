function muitiplyby5(num){
    return 5*num
}
console.log(muitiplyby5(5));
muitiplyby5.power=2
console.log(muitiplyby5.power);
console.log(muitiplyby5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increament=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
    
}
const chai= new createUser("chai",25)
const tea= new createUser("tea",205)//inke pass context value nhi h value kise 
// incrament karna h isye
//  this ka use kia h jiska h uski value increase hogi
//are sidha sa jis ka mitlb this
//new properties ko read karta h aur inject karta h


chai.printMe()

/*
a new object is created: the new keyword intiates the creation
 of a new javascript object

 a prototype is linked: the newly created  object getslinked
 to the prototype property of the condtructor function.this 
 means that it has access to properties and methods defined'
 on the constructor prototype.

 the constructor called: the constructor function is called
 with the specified argument and this is bound to the newly
  created object .if no explict return value is specified
  from the constructor ,javascript aassumes this,the newly
  created object,to be the intended return value.

  the new object is returned,aftr the constructor function has
  callled,if it doesnt return a non primitive value
  (object,array,function,etc.)the newly created object is
  reeturned.

*/

