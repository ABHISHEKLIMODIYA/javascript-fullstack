// const tinderUser =new Object() single ton  object
const tinderUser ={}
tinderUser.id="tin123"
tinderUser.name="sanny "
tinderUser.isLoggedIn=false
// console.log(tinderUser);
const regularUser ={
    email:"san@fb.com",
    fullname:{
        userFullname:{
            firstnsme:"abhishek",
            lastname:"limodiya"
        }
    }


}
console.log(regularUser);
const o1={
    1:"a",
    2:"b"
}
const o2={
    3:"a",
    4:"b"
}
const o={o1,o2}
console.log(o);
const obj={...o1,...o2}
console.log(obj);
console.log(typeof obj);
const obj2 =Object.assign(o1,o2)
console.log(obj2)
const obj3 =Object.assign({},o1,o2)
console.log(obj3)


//when database se value aati h
const user=[{
    id:"1",
    name:"abhi"
},{id:"1",
    name:"abhi"

}]
user[1].name

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));
//object destructring
const course={
    coursename:"js fullstack",
    price:"2233",
    courseInstructor:"abhi"
}
//course.courseInstrutor
const {courseInstructor}=course
console.log(courseInstructor);

const {coursename:name}=course
console.log(name);

//json
/*    {"name":"abhidhek"
"age":17


}                                          


*/ 










 