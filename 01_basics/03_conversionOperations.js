let score = "33"
let numberScore = Number(score);

console.log(numberScore);//33
console.log(typeof numberScore);//number

let score1 = "33abc"
let numberScore1 = Number(score1);

console.log(numberScore1);//NaN
console.log(typeof numberScore1);//number

/*
    "33" => 33
    "33abc" => NaN
    true => 1 
    false => 0
*/
let isLoggedIn = 1;
let CheckisLoggedIn = Boolean(isLoggedIn);
console.log(CheckisLoggedIn); // true
console.log(typeof CheckisLoggedIn); // boolean

let stringScore = String(score);
console.log(stringScore);
console.log(typeof stringScore);