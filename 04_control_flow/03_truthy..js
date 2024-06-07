const userEmail = []
// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }// output=> Got user email



// but we havent mention true or false in the if condition but we got the result considering [] as a true so in JS it have some default value for the following 

//falsy Values
//false,0,-0,BigInt 0n,"",null,undefined,NaN 
//except these all have having true values

//for example(Truthy Values)
//true,"0"," ","false",[],{},function(){}

if(userEmail.length===0 ){
    // console.log("Array is empty");
}

//*******Intresting *********//
//Nullish Coalescing Operator(??): null ,undefined

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 10 ///10
// val1 = null ?? undefined ?? 10 ??100//10


//basically it is returning 1st not null or undefined value

// console.log(val1);

//Ternary Operator (shorthand for if_else statement)

const iceCreamPrice = 100;
// if(iceCreamPrice<100){
//     console.log("I will buy");
// }else{
//     console.log("out of budget");
// }


//we can write the same conditional statement using ternary operator

(iceCreamPrice<100)? console.log("I will buy"):console.log("Out of budget");
