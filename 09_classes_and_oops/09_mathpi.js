//can we change the value of pi? in maths library

// answer is NO
// we can see by applying the following code writable property is false so we can't overwrite the value of pi

const descripter = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descripter);

/*OUTPUT
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const chai = {
    name:"ginger chai",
    price:250,
    isAvailable : true,

    orderchai: function(){
        console.log("chai nhi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
  we can se the writable property is true so we can over write the name here
*/

Object.defineProperty(chai,"name",{
    writable:false
})

//now we can't overwrite the name of the chaiii

console.log(Object.getOwnPropertyDescriptor(chai,"name"));