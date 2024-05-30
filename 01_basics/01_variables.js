const userId = 123100
var userName = "Shubh"
let userPass = "Shubh@123"
//userId = 120000 is not allowed because userId is constant variable
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
userName = "Shubh ujala"
userCity = "Punjab" // not prefered to decalare variable like this
let userContactNo;

console.log(userId);
console.table([userId,userName,userPass,userCity,userContactNo]);
