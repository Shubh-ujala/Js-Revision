var c = 300
if(true){
    let a = 10
    const b = 10
    // console.log(a);
    // console.log(c);//300
}
// console.log(a);//error a is in the functional scope so can't be excessable outside the scope
// console.log(b); // same reason error!!

// console.log(c);//300

//***Important note */

//element decleard in global scope can be accesable inside the functional scope but reverse is not true..
//element declared inside the functional scope can't be assesable outside the functional scope//


//example
function one(){
    const username = "shubh"
    function two(){
        const website = "yt"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();
// two();//scope for a reason 

if (true) {
    const username = "Shubh"
    if (username === "Shubh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);//error
}

// console.log(username);//error


//***********intresting!!******/
console.log(addone(-1));
function addone(num){
    return num+1
}
// console.log(addTwo(5));//it will show an error becasue we have decalred a function in a different way by assigning in the variable so any variable can't be assesed before initialization
const addTwo = function(num){
    return num+2
}
