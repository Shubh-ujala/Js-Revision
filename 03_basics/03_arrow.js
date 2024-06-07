const user = {
    username : "Shubh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()

// console.log(this);//return empty object as we are using node

function chai(){
        let username = "Shubh"
        // console.log(this.username);//undefined
        console.log(username);//shubh
}
// chai()//undefined if we use this.username inside the console


// const chai1 = () => {
//     let username = "shubh"
//     console.log(this);//empty object
// }
// chai1();

//******Arrow Function */
// () => {}  BASIC SYNTAX
// const addTwonum = (num1,num2) => {
//         return num1+num2
// }
// console.log(addTwonum(5,5))

// we have just one operation so we can also use arrow function like this

// const addtwo  = (num1,num2) => num1+num2
const addtwo  = (num1,num2) => (num1+num2)
// console.log(addtwo(5,5))

const showName = (num1) => ({username:"shubh"})//returing object!
// console.log(showName(5));

const mulofTwoNum = (n1,n2)=>{
    return n1*n2
}

// const y = mulofTwoNum () => {}
console.log(mulofTwoNum(5,5));