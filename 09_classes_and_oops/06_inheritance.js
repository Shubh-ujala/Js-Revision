class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        // user.call(this,username)//instead of using this we have new syntax 
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Hitesh ","hitesh@teacher.com",8912437)
chai.addCourse()//A new course was added by Hitesh
chai.logMe()//accessable

const student = new user("shubh")
student.logMe();//USERNAME is shubh
// student.addCourse();//error 

//class Teacher extends student means Teacher can excess the methods which are present in the student class  but student can't excess the methods in the teacher class

class Hod extends Teacher{
    constructor(username,Department,yearofExp){
        super(username)
        this.Department =Department
        this.yearofExp = yearofExp
    }

    printMe(){
        console.log(`I am ${this.username} the HOD of ${this.Department} Departement having an experience of ${this.yearofExp}`);
    }
}

const HodOne = new Hod ("mohit","CSE", "20")
HodOne.logMe();
HodOne.addCourse();
HodOne.printMe();
