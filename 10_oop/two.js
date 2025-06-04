const user={
    username:"abhishek",
    logincount:9,
    signedIn:true,
    getUserDetails:function(){
        console.log("got user datails to database");
        console.log(`username:${this.username}`);
        console.log(this);
        
        
        
    }

}
// const promiseOne=new Promise();
// const date =new Date()//new  used for context making"
//callaed constructor function

function User(username,logincount,isloggedIn){
    this.username=username
    this.logincount=logincount;
    this.isloggedIn=isloggedIn;
    return this//likhe y na like bydefault hota h
}
// const Userone=User("abhi",12,true)
// console.log(Userone);
// const Usertwo=User("abhishek limodya",120,false)
// console.log(Userone);
// //vaalue override ho gyiii isliye new ka use karte h

const Userone= new User("abhi",12,true)
console.log(Userone);
const Usertwo= new User("abhishek limodya",120,false)
console.log(Userone);

//new use karenge to empty  object(instance )create hota h
//constructur function call hota h new ke karan aur aggument wagerah miljati hoti h
//inject 
//we obtained in function