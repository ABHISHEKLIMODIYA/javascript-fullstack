const ai=["machine learning","generative ai","deep learning","ai","nlp"] 
const ml =["supervised","unsupervised","regression"]
// ai.push(ml)

// console.log(ai);
// const ai2=ai.concat(ml)
 
// console.log(ai2)
// //

const arti =[...ai,...ml]
console.log(arti)//another way to merge and mostly used
const intarr =[1,3,[3,4,[5, ,6,7],8],9,[10,11]]
const rlarr= intarr.flat(1);//Infinity also used
console.log(rlarr);


console.log(Array.isArray("abhi"));
console.log(Array.from("abhishek"))
console.log(Array.from({name:"abhishek"}))//neeed to mention key sry y string se array banana h// intresting


let s1=100;
let s2=200;
let s3=788;
console.log(Array.of(s1,s2,s3));









