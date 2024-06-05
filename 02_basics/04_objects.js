const tinderUser = {}
tinderUser.id = "123xyz"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "som@google.com",
    fullname:{
        userFullName: {
            firstName : "Shubh",
            lastName : "Ujala"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname.userFullName.lastName);

// console.log(`My regular user is ${regularUser.fullname.userFullName.firstName} ${regularUser.fullname.userFullName.lastName}`);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}//object ke ander object aa jayega 
//correct way!
// const obj3 = Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//best way !!
//we will always use this way!!
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3); 

//array of object!!
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123xyz', 'sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123xyz' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedOut'));//false

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor//hitesh  //good way but in place of writing whole thing again and again we can also use like below

const{courseInstructor:instructor} = course

console.log(instructor);//hitesh

//generally we get the return value from api call like this
{
    //     "name": "hitesh",
    //     "coursename": "js in hindi",
    //     "price": "free"
    // 
}
// we can also get array of objects from API call
[
    {},
    {},
    {}
]
    