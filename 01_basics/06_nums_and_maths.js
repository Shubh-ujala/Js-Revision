const number = 400
const score = new Number(400);
console.log(score);
console.log(typeof score);

console.log(typeof(score.toString()));
console.log(score.toFixed(2)); //400.00

const otherNumber = 123.896;
console.log(otherNumber.toPrecision(4)); //123.9  (3)==> 124
const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-IN'));




//*************Maths**************
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); //4
console.log(Math.max(4,5,6,7,8)); //8
console.log(Math.min(5,-6,8,7)); //-6

console.log(Math.random()); //(0-1)
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 25;
console.log(Math.floor(Math.random()*(max-min+1))+min); //important formula you can say! to find the random number between two numbers both inclusive