//filter discussed

const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((items)=>{return items})

// console.log(values);//undefined

// const values1 = coding.filter((vals) =>{
//     return vals
// })
//output 
//[ 'js', 'ruby', 'java', 'python', 'cpp' ]
const values1 = coding.filter((vals) =>{
    return vals!='js'&& vals!='java'
})//output [ 'ruby', 'python', 'cpp' ]
console.log(values1);


const myNums = [1,2,3,4,5,6,7,8,9,0]

const ans = myNums.filter((nums)=>{return nums>4})
console.log(ans);// output
//[ 5, 6, 7, 8, 9 ]

const newNums =[]
// myNums.forEach((nums)=>{
//     if(nums<=4)
//     newNums.push(nums)
// })//output[ 1, 2, 3, 4, 0 ]

//Same work we can perform with the help of filter function as well
myNums.filter((nums)=>{
    if(nums<=4){
        newNums.push(nums)
    }
})//output [1,2,3,4,0]
// console.log(newNums);


/*PRACTICE TIME!!! */
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//1> WE HAVE TO COME UP WITH THE OBJECT WHOSE GENRE IS NON FICTION 
let mybooks = books.filter((anyObj)=>{
    return anyObj.genre == "Non-Fiction"
})
// console.log(mybooks);

//2> WE HAVE TO COME UP WITH THE RECORD OF THE BOOKS WHOSE PUBLISH YEAR IIS AFTER 1995

// let outBooks = books.filter((bkk)=>{
//     if(bkk.publish>1995){
//         return bkk
//     }
// })

let outBooks = books.filter((bkk)=> bkk.publish>1995)
//here we don't need to use return as we are not using {}


console.log(outBooks);