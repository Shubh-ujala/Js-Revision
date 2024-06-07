//for of loop (Specially for array)
//["","","",""]
//[{},{},{}]

// const arr = [2,3,4,5,6,7,8,9]
// for (const element of arr) {
//     console.log(element);
// }

const greeting = "WELCOME TO THE WEBPAGE"
for(const greet of greeting){
    console.log(greet);
}
//output
/*
W
E
L
C
O
M
E
 
T
O
 
T
H
E
 
W
E
B
P
A
G
E */

//Maps 

const map = new Map()
map.set('In',"India")
map.set('Fr',"France")
map.set("USA","United states of america")
// map.set('In',"India")//not repeated 

console.log(map);
/*Output
Map(3) {
  'In' => 'India',
  'Fr' => 'France',
  'USA' => 'United states of america'
} */

  //for of loop in maps
  for (const [key,value] of map) {
    console.log(`${key}-${value}`);
  }
  /*OUTPUT!!
    In-India
    Fr-France
    USA-United states of america */
  
//   for (const [hi,hello] of map) {
//     console.log(`${hi}-${hello}`);
//   }same result as above :)

