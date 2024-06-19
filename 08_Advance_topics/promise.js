//Syntax 1 of promise

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()//by this we gets the msg promise consumed means if we put resolve() then only the function will executed
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//Syntax 2 (without storing into variable)

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2 done");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//passing arguments in resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"shubh",email:"shubh@google.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"shubh",email:"shubh@google.com"})
        }
        else{
            reject("ERROR: something wents wrong")
        }
    }
    ,1000)
})

promiseFour.then((user)=>{
    console.log(user);
    //let say we want to return name of that particular object 
    return user.username
}).then((name)=>{
    console.log(name);//shubh will returned here
}).catch((error)=>{
    console.log(error);//reject() will work here
}).finally(()=>{
    console.log("I will always be there with you");
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username:"shubh",password:"1234"})
        }else{
            reject("ERROR: Something weird Happened.")
        }
    },1000)
})

//anothe syntax is using async,await insted of .then(),.catch()

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

//We want to fetch data from https://api.github.com/users/hiteshchoudhary url then how we proceed 

//way 1 (using async await)

// async function getUserData(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()//data that is coming up is in string form so we are  converting the coming data into object by using .json()
//         console.log(data.followers);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getUserData()

//Way- 2 using .then(),.catch()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((myUser)=>{
    console.log(myUser.followers);
})
.catch((error)=>{
    console.log(error);
})