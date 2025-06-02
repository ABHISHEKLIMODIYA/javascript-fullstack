const programming =["python","js","rb","java"]
// programming.forEach require call back function->
// //callback function ka naam nhi hota h
programming.forEach(function (item){
    console.log(item);
    

}
)



programming.forEach((item)=>{
    console.log(item);
    

})



function print(item){
    console.log(item);
    
}
programming.forEach(print)



programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    

})


const coding=[{
    langName:"javascript",
    FileName:"js"
}
,{ langName:"java",
    FileName:"java"

},
{
     langName:"python",
    FileName:"py"
}
]
coding.forEach(
    (item)=>{
        console.log(item.langName);
        
    }
)

