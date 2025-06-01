

function sayMyName(){
    console.log('a');
console.log('b');
console.log('h');
console.log('i');
    
    
}
// sayMyName()
function addnum (n1,n2){
    console.log(n1+n2);
    
}
addnum()
addnum(2,3)
addnum(3,"4")
addnum(3,"a")
addnum(3,null)
const result=addnum(3,5)
console.log("Result: ",result);//not any value return by the function

function addn (n1,n2){
    let n=n1+n2 
    return n
    console.log("BHI");
    
    
}
const r=addn(3,5)
console.log("Result: ",r);


console.log("****************************************************")
function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter user name")
        return
    }
    return `${username} just loged in`
}
console.log(loginUserMessage("abhishek"))
console.log(loginUserMessage())

//rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,344,2,3,233,2,3))
function calculateCart(val1,val2,...num1){
    return num1
}
console.log(calculateCart(200,344,255,388,233,2,3))
//200->val1 344->val2 rest going to array

const user={
    username:"abhisahek",
    price:1223
}
function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
handleObj(user)
handleObj({
    username:"sameer",
    price:0990
})
const arr =[1,2,3,4,5]
function return2ndValue(array){
    return array[2]

}
console.log(return2ndValue(arr));
