//all the outputs will be in boolean 
// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=1); // true
// console.log(2==1); // false (it will compare only the values)
// console.log(2<=1); // false
// console.log(1===1); // true (it will compare value as well as datatype )
// 
// console.log("1"==1); // true (in backend js convert the string into number and then perform the operation)
// console.log("1"===1); // false because it will compare the datatype as well 
// console.log("1"<=1); // true (same reason as 9th line)

//*** SOME CONFUSING RESULTS***//
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

/*
    the reason for the line 16th is 
    in JS comparision and equality operators works differently 
    equality operation converts the null into some number and consider it as 0 and then perform the operation thats why in line 14th it performs  0>0  => False
    line 15th it performs null == 0 => False
    line 16th it performs 0>=0 => true
*/

console.log(undefined == 0); //F
console.log(undefined > 0); //F
console.log(undefined < 0); // F

/*
    in case of undefined it always shows false as an output.
*/
