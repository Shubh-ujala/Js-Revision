//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman",'naagraj']
const myArr2 = new Array(1,2,3,4)//syntax to declare an array
// console.log(myArr);
// console.log(myArr2);
// console.log(myHeros);

//Array methods
myArr.push(6);
myArr.push(7);//6,7 will be added at the end
myArr.pop();//last element will be removed
myArr.unshift(10);//10 will be added in the starting
myArr.shift()//first element will be removed
myArr.shift();
myArr.pop();
myArr.unshift(0);
// console.log(myArr);
// console.log(myArr.includes(10)); // false because 10 is not the element of our array

// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(newArr);//join the element of array as a string
// console.log(typeof newArr); // string

//slice & splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1); // it returns the element from the array having index 1,2

console.log("B ",myArr);
const myn2 = myArr.splice(1,3);

console.log(myn2);// it it returns the element from the array by removing that part from the array that also affects the length of the array having index 1,2 and 3
console.log("C ",myArr);