//ES6 

class user {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new user("shubh","shubhujala@fb.com","123456")

console.log(userOne.encryptPassword());
console.log(userOne.changeUserName());


//behind the scene

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new User("swayam","swayam@yahoo.com",357982)
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUserName());