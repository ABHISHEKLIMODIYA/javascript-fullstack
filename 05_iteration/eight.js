//reduce js Array.reduce() --user supply reducer
//accumalator=>empty variable accm<-intialvalue ,,,accm+currentvalue
const arr=[1,2,3,4];
const myarr =arr.reduce(function (acc,currval){
    console.log(`acc:${acc},currval :${currval}`);
    
    return acc+ currval
},0)
console.log(myarr);
 
const mytotal= arr.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal)

const shoopingCart =[
    {
        itemName :"js",
        price:1220
    },
    {
        itemName :"python",
        price:999
    },
    {
        itemName :"js",
        price:1220
    },
    {
        itemName :"app dev",
        price:12200
    }
]
const topay =shoopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(topay);






