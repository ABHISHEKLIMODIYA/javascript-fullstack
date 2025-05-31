const arr=[1,2,3,true,'abhishek']//in js array are resizable
console.log(arr[0]);
//array in java it provide shallow copy-copy same reference point
//deep copy not same reference 
//methods of array
const arr2 =new Array(1,2,3,4,5)


arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(4)//add 4 at front 
console.log(arr);
arr.shift()
console.log(arr);
console.log(arr.includes(9));
console.log(arr.indexOf(4));
///
const newarr=arr.join();
console.log(arr);
console.log(typeof arr);

console.log(newarr);
console.log(typeof arr);
//slice,splice
console.log("A",arr);
const ar1=arr.slice(1,3)
console.log(ar1);
console.log("B",arr);

const ar2=arr.splice(1,3)
console.log(ar2);
console.log("c",arr);
// A [ 1, 2, 3, true, 'abhishek' ]
// [ 2, 3 ]
// B [ 1, 2, 3, true, 'abhishek' ]
// [ 2, 3, true ]
// c [ 1, 'abhishek' ]












