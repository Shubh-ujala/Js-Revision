//foreach loop one of the best!
const coding = ["js", "ruby", "java", "python", "cpp"]

//WAY -1 (using normal callback function)
// coding.forEach(function(val){
//     console.log(val);
// }); 

//basic syntax of foreach funtion is arr.foreach(callbackfunction)

//WAY-2 (using arrow function)
// coding.forEach((val)=>{
//     console.log(val);
// })

function printMe(item){
    // console.log(item);
}
//Way-3 (Passing refrence of the function)
coding.forEach(printMe)//we will provide only refrence not to execute the function!


coding.forEach((item,index,arr)=>{console.log(item,index,arr);})
/*
OUTPUT!!
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})

//with the help of for each we can iterate on both array and object

