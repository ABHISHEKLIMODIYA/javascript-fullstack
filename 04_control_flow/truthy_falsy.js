 //false values-> 0,-0,false,BigInt 0n,null,defined,Nan,""
 //truthy values-> "0","false"," ",[],{},function(){}
 
 
 
 
 
 
 
 
 const mail ="abhi@microsoft.com"
 if(mail){
    console.log("email is present");
    
 }
 else{
    console.log("dont have email");
    
 }
 const email =""
 if(email){
    console.log("email is present");
    
 }
 else{
    console.log("dont have email");
    
 }
 const gmail =[]
 if(gmail){
    console.log("email is present");
    
 }
 else{
    console.log("dont have email");
    
 }



 const emptyobj ={}
 if(Object.keys(emptyobj).length===0){
    console.log("empty obj");
    
 }
 /// nullish coalescing operator(??): null undefined
 let val1;
 val1=5??10
 console.log(val1);
  let val2;
 val2=null??10
 console.log(val2);
  let val3;
 val3=undefined??10
 console.log(val3);
 
  let val4;
 val4=undefined??null
 console.log(val4);
 
  let val5;
 val5=null??null
 console.log(val5);
 
  let val6;
 val6=undefined??10??12
 console.log(val6);
 
 //terinaryoperator 
 const tea=20;
 tea>=10?console.log("grater than 10"):console.log("less thsn 10")
 