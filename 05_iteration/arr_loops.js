// for of
// [""."",""]
// [{},{},{}]
const arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    
    
}
const greet="welcome to vs code"
for (const i of greet) {

    console.log(`each char ${i}`);
    
    
}
//maps-> it is object in the js which hold key value pair//all values are uniquen in it not duplicate value 
const map =new Map()
map.set("IN","India")
map.set("USA","United State of America")
map.set("Fr","France")
map.set("IN","India")
map.set("In","India")
// console.log(map);
for (const element of map) {
    console.log(element);
    
    
}
for (const [key,value] of map) {
    console.log(key,"->",value);
    
    
}
for (const [key,value] of map) {
    console.log(key);
    
    
}
for (const [key,value] of map) {
    console.log(value);
    
    
}
//for of for obj//error come object not iteracle
const obj={
    "b1":"cse",
    "b2":"it"

}
for (const element of obj) {
    console.log(element);
    
    
}
for (const [key,value] of obj) {
    console.log(key,"->",value);
    
    
}
for (const [key,value] of obj ){
    console.log(key);
    
    
}
for (const [key,value] of obj) {
    console.log(value);
    
    
}

