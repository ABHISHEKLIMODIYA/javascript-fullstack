var c=300
let a=100
const b=200
if(true){
    let a=10
    const b=20
    var c=30//var likhe ya na likhe
}
// console.log(a);->error come when globally not defined
// console.log(b); ->error come they ase no defind
console.log(c);//output 30
console.log(a);
console.log(b);

function one(){
    const name="abhishek"
    function two(){
        const app ="utube"
        console.log(name);
        
    }
    // console.log(app);//give error child element not access by parent
    two()
    
}
one()

//***************///--intresting-- */
console.log(addone(400));

function addone (num){
    return 1+num
}
addone(5)//isko function ke upar ya niche not error

// console.log(addTwo(9));// this give error unable to fetch function

const addTwo =function(num){//expression
    return num+2
}
addTwo(5)


