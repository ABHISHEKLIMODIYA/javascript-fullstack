const mynumbers =[1,2,3,4,5,6,7,8,9,10]//map automatic return value itself
const newnumbs =mynumbers.map((num)=>num+10)
console.log(newnumbs);
const newnumb =mynumbers.map((num)=>{
    num+10})
console.log(newnumb);

//chaining
const newnums=mynumbers.map((num)=>num*10).map((num)=>num+2)
                           .filter((num)=>num>30)
console.log(newnums);

