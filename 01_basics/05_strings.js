let myName = "Shubh"
// console.log(typeof myName);

let myRepoCount = 10

// console.log(myName+" "+myRepoCount);//old way not prefered generally

// console.log(`Hi My name is ${myName} and my repo count in github is ${myRepoCount}.`);//prefer to use back ticks 

const gameName = new String('Shubh- fff')//Way to declare the string
console.log(gameName);
console.log(typeof gameName); //object
console.log(gameName.charAt(5));
console.log(gameName.includes("Shubh"));
console.log(gameName.length);
console.log(gameName.indexOf('f'));
console.log(gameName.indexOf('t'));
console.log(gameName.split(' '));
console.log(gameName.split('-'));
// console.log(typeof gameName);
console.log(gameName.endsWith("f"));
console.log(gameName.replace("-","%&"));
console.log(gameName);//old string will be as it is because it is stack iykyk

console.log(gameName.substring(1,4));
console.log(gameName[5]);

