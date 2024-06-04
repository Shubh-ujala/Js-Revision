const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // returns array inside array 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // it will returns the array of all the heros

//******easy way to concatinate the arrays
// const all_my_heros = [...marvel_heros,...dc_heros]
// console.log(all_my_heros);//it will also returns the names of all the heros

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//it will returns all the elements on a single array without any subarray

console.log(Array.isArray("Shubh"))
//reutrns false because it is string not array

console.log(Array.from("Shubh"))//it returns the array like this ['S','h','u','b','h']
console.log(Array.from({name: "Shubh"}))//empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[100,200,300]
