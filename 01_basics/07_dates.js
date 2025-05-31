let now =new Date();

console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toJSON());
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());
console.log(now.toString());
console.log(now.toLocaleTimeString());
console.log(now.toUTCString());
// Sat May 31 2025
// 2025-05-31T06:12:12.554Z
// 2025-05-31T06:12:12.554Z
// 5/31/2025
// 5/31/2025, 6:12:12 AM
// Sat May 31 2025 06:12:12 GMT+0000 (Coordinated Universal Time)
// 6:12:12 AM
// Sat, 31 May 2025 06:12:12 GMT
console.log(typeof now);//object
let mydate =new Date(2025,4,31)
console.log(mydate.toDateString());//Sat May 31 2025
let date =new Date("2023-05-31")
console.log(date.toLocaleString);
let dat =new Date("05-31-2025")
console.log(dat.toLocaleString());
let timestamp=Date.now();
console.log(timestamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));
let newdate =new Date();
console.log(newdate.getMonth());


console.log(newdate.toLocaleString('dafault',{
    weekday:"long",
    month:"long",
    year:"numeric"
}))










