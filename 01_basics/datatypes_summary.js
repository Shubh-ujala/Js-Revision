//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = "100"
console.log(typeof score); //number
const scoreValue = 100.3
console.log(typeof scoreValue); // number

const isLoggedIn = false
console.log(typeof isLoggedIn); //boolean
const outsideTemp = null
console.log(typeof outsideTemp); //object
let userEmail;
console.log(typeof userEmail); //undefined

const id = Symbol('123')
console.log(typeof id); //symbol
const anotherId = Symbol('123')
console.log(typeof anotherId); //symbol

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber); //bigint


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); //object
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj); //object
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); //function (object function)

// https://262.ecma-international.org/5.1/#sec-11.4.3


/********************************************************/

//Stack (Primitive Datatypes)  Heap (Non - Primitive Datatypes)

let myYoutubeName = "ShubhUjala"
let anotherName = myYoutubeName

anotherName = "Shubhuuu"
console.log(myYoutubeName); // (Stack) ShubhUjala
console.log(anotherName);//(Stack) Shubhuuuu

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "Shubh@google.com";
console.log(userTwo.email); //(Heap) Shubh@google.com
console.log(userOne.email); //(Heap) Shubh@google.com
