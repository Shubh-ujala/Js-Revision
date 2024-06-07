//for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const value in myObject) {
    console.log(`${value} shortcut is for ${myObject[value]}`);

    //myObject.key => undefined
    //myObject[key] works!!
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const value in programming) {
    console.log(programming[value]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(map);
// }
//for in loop will not work in map
