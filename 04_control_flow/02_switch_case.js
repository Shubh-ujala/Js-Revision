//basic syntax 
/* 
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/   
//Example....
const month = "mar"
//switch(key)  here key means targeted variable 
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "Apr":
        console.log("April");
        break;
    default:
        console.log("Default case matched");
        break;
}

