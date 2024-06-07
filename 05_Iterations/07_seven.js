const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((numm)=>{
//     return numm+1
// }) //[2, 3, 4,  5,  6, 7, 8, 9, 10, 11]

// const newNums = myNums.filter((numm) => {return numm + 1}) //[1,2,3,4,5,6,7,8,9,10]
// console.log(newNums);

const final_Nums = myNums
                    .map((nums)=>nums*0)
                    .map((nums)=>nums+10)
                    .filter((nums)=> nums>8)
// console.log(final_Nums);