const obj={
    js:"javascript",
    py:"python",
    cpp:"c++"
}
//for in 
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const key in obj) {
  
    console.log(obj[key])
    
}
// }
for (const key in obj) {
  
    console.log(key)
    
}
for (const key in obj) {
  
    console.log(`${key} -->${obj[key]}`)
    
}


const programming =["python","js","rb","java"]
for (const key in programming) {
  
    console.log(`${key} -->${programming[key]}`)
    
}
const map =new Map()
map.set("IN","India")
map.set("USA","United State of America")
map.set("Fr","France")
map.set("IN","India")
map.set("In","India")
for (const key in map) {
  
    console.log(`${key} -->${map[key]}`)
    
}//no output for map bcz map is not iterabale.


