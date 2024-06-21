class user {
   constructor(username){
        this.username = username
   } 
   logMe(){
    console.log(`Username: ${this.username}`);
   }

   static createId(){
    return `123458794`
   }
}

const shubh = new user("shubh");
// console.log(shubh.createId());//by static keyword the createId can't be accessable it will throw an error showing shubh.createId() is not a function

class Teacher extends user {
    constructor(username,email){
        super(username)
        this.email =email
    }
}
const facultyOne = new Teacher("swayam","swyam@333.com")
console.log(facultyOne.createId()); 
