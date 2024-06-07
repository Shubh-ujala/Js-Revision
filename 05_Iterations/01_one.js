//for Loop

for (let index = 1; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

// console.log(element);//error element is not in a global scope :)

for(let i=1;i<=10;i++){
    // console.log(` table of ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`${i}*${j} = ${i*j}`);
        
    }
}//basic inner and outer loop example

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


/* Break and Continue */

for(let i=0;i<10;i++){
    if(i==7){
        // console.log(`Favourite number Achieved ${i}`);
        // console.log("Thala for a reason");
        break;
    }
    // console.log(`Value of i is ${i}`);
}

for(let i=0;i<=20;i++){
    if(i==5){
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}