function setUsername(username){
    //complex DB calls
    this.username = username
}

function createUser (username,email,password){
    // setUsername(this.username)//error this will not works
    //correct syntax is 
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("shubh","shubh@google.com",1234)
console.log(chai);
//output 
/*
createUser {
  username: 'shubh',
  email: 'shubh@google.com',
  password: 1234
}
*/