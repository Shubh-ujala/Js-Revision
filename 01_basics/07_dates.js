//Dates (little bit complex)

let myDate = new Date();
// console.log(myDate);//not understandable
// console.log(myDate.toString());//little bit clear form the last one
// console.log(myDate.toDateString());
// //more clear from the above
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23) //months starts from 0 if we declared like this
// let myCreatedDate = new Date(2023,0,23,5,3,4) //months starts from 0 if we declared like this
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // to convert it into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);// + 1 because as we know months are starting from 0 so to avoid the confusion we just add 1 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})