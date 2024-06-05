//singleton
//object.create

//object literals

const mySum = Symbol("key1")

const JsUser = {
    name:"Shubh",
    "full name" : "Shubh Ujala",
    [mySum]:"mykey1", //symbol
    age:19,
    location : "beohari",
    email : "shubh@google.com",
    isloggegIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);//another way to access
console.log(JsUser["full name"]);
console.log(JsUser[mySum]);

JsUser.email = "shubh@chatgpt.com"
console.log(JsUser.email);
// Object.freeze(JsUser);//now we can not make changes in the JsUser object
// JsUser.email = "shubh@chatgpt4.com"
//it will not updated because we already freeze the object

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);//JsUser.name
}
console.log(JsUser.greetingTwo());