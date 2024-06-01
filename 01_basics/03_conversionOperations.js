let score = "33"
let numberScore = Number(score);

// console.log(numberScore);//33
// console.log(typeof numberScore);//number

let score1 = "33abc"
let numberScore1 = Number(score1);

// console.log(numberScore1);//NaN
// console.log(typeof numberScore1);//number

/*
    "33" => 33
    "33abc" => NaN
    true => 1 
    false => 0
*/
let isLoggedIn = 1;
let CheckisLoggedIn = Boolean(isLoggedIn);
// console.log(CheckisLoggedIn); // true
// console.log(typeof CheckisLoggedIn); // boolean

let stringScore = String(score);
// console.log(stringScore);
// console.log(typeof stringScore);


// *********************** Operations ***********************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Shubh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12 (1st operator is string so whole will be considered as string and the output will be 12)
// console.log(1 + "2"); // 12 (it will solve the 1st part and then concate it with the string and show the output as 12)
// console.log("1" + 2 + 2);//122 (1st operator is string so whole will be considered as string and it will concatinate all the operators  and show the output as 122)

// console.log(1 + 2 + 5+ "2");//32 (solve the operations untill the string comes and when the string came it will concatinate and show the output as 82)

// console.log( 3 + 4 * 5 % 3);

// console.log(+true);  // 1
// console.log(+"");   // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
//***************Prefix and postfix  ****** from mdn
// let x = 3;
// const y = ++x;// x=4 & y=4
// x is 4; y is 4
// console.log(x);
// console.log(y);

// let x2 = 3n;
// const y2 = ++x2;
// x2 is 4n; y2 is 4n

let x = 3;
const y = x++;// x=4 y=3
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;//x2=4n y2=3n
console.log(x2);
console.log(y2);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion