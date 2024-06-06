function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
}

// sayMyName();
// function addTwoNumbers(num1,num2){
//     //parameters
//     console.log(num1+num2);
// }

// addTwoNumbers(5,5);//arguments 

function addTwoNumbers (num1,num2){
    return num1+num2;
}

const ans = addTwoNumbers(-5,10)
// console.log(ans);

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        //or if(!username)
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in `

}
// console.log(loginUserMessage("shubh"))

function calculateCartPrice(...num1){
    //...num1 returns an array
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))//[ 200, 400, 500, 2000 ]

const user = {
    username:"shubh",
    price : 1999
}

function handleObject (anyObject){
    console.log(`username is ${anyObject.username} and pricee is ${anyObject.price}`);
}
// handleObject(user);

// handleObject({
//     username:"sam",
//     price:3000
// })//passing whole object as a argument

const newArray = [200,400,100,600];
function getSecondValue(anyArray){
    return anyArray[1];
}
const secondVal = getSecondValue(newArray);
// console.log(secondVal);

// console.log(getSecondValue([200,400,600,1000]));//passing whole array as an argument..
