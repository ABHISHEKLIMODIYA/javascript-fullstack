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
console.log(user.username);
console.log(user.getUserDetails());
console.log(this)

