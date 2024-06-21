const user = {
    username : "Shubh",
    loginCount : 5,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details");
        console.log(`Username : ${this.username}`);
        //this shows that we are talking about the username of the current context if we are not using this then we surely got an error saying that username is not defined
    }
}
console.log(user.username);
console.log(user.loginCount);
console.log(user.signedIn);
console.log(user.getUserDetails());
console.log(this);//empty object as we are in node environment

//the problem is if we want to display the data of the another user then we have to write all the above code again and again so instead of writing the code again we can simply do the task like this ..

function User (username,loginCount,isLoggedIn){
    this.username = username;
    //here this.username is acting like a variable where username is going to be stored
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome : ${this.username}`);
    }
    return this//this is not mendetory step but return this is good practice
}
const userOne = new User("shubh",12,true)
const userTwo = new User("swyam",50,false)
//if we not use the "new" then the data on the object rewrites means wether we are not changing the username of userOne then also it shows swyam as the username 
//means if we not use the "new" then when we are printing details of userOne we got the result as 
// username:"swyam",loginCount:50,isloggedIn :false


console.log(userOne.greeting());//welcome: shubh
console.log(userOne);
console.log(userTwo.greeting());

/*Important note for "new" keyword
1> when we use new keyword then an empty object got created which is commonly known as instance
2> constructor function is called due to new keyword 
3> all the argumeents got injected in this keyword 
4> finally we got the output
*/