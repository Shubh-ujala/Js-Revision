let myName = "Shubh    "

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getspiderPower: function(){
        console.log(`spiderman's power is ${this.spiderman}`);
    }
}

// heroPower.getspiderPower()//spiderman's power is sling

Object.prototype.shubh = function(){
    console.log(`shubh is present in all objects`);
}

//function shubh will added in the protype of object 

heroPower.shubh();//shubh is present in all objects

myHeros.shubh()//shubh is present in all objects

//we have inserted an image prototype.png where you can see that if we make change in the prototype of object it will reflect on the function,array,string because object is like the parent of these three 


//but if we make the changes in either function , array or string then it will not reflect to the object and also it will not reflect between them means if we make changes in the prototype of array then we can't access the change in the string,function or even in objects

Array.prototype.Hishubh = function(){
    console.log(`Hi Array from shubh`);
}

// heroPower.Hishubh();//error reason well explained above

myHeros.Hishubh();//Hi Array from shubh

//we want to create the truelength which returns the actual length of the string after removing the spaces with the help of prototype

let mystr = "shubhh     "
String.prototype.trueLength = function(){
    console.log(`True length is : ${this.trim().length}`);
}

mystr.trueLength();//6 
myName.trueLength();//5


//inheritance 

const user = {
    name:"chai",
    email:"chai@google.com"
}

const teacher = {
    makeVideos:true
}
const teacherSupport ={
    isAvailable :false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:teacherSupport
}
teacher.__proto__ = user

//modern syntax 
Object.setPrototypeOf(teacherSupport,teacher)


