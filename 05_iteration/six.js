const programming =["python","js","rb","java"]
//for eACCH NOT RETURN ANY VALUE
const values =programming.forEach((item)=>{
    //console.log(item);
    return item
    
})
console.log(values);


const num =[1,2,3,4,5,6,7,8,9,10]
const newnum= num.filter((num)=>num>4)

console.log(newnum)
const newnums= num.filter((num)=>{
    num>4
})
console.log(newnums);
const newnu= num.filter((num)=>{
   return num>4
})
console.log(newnu);

const mynum =[1,2,3,4,5,6,7,8,9,10]
const mynumss=[]
mynum.forEach((num) => {
    if (num > 4){
        mynumss.push(num)
    }
})
console.log(mynumss);



/// 










