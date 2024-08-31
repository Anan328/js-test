// Singleton Pattern: Ensures only one instance of the object exists globally
// Non-Singleton Pattern: Allows multiple independent instances of the object

const user = {};
user.id="1h34c";
user.name = 'david';
user.isLoggedIn = false;
// console.log(user);

const regularUser = {
    email:"sample@gmail.com",
    fullName:{
        userFullName:{
            firstName:"tame",
            lastName:"decor"
        }
    }
}
//console.log(regularUser.fullName?.userFullName.firstName); //? ->if fullNameme is not present, returns undefined

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};
//const obj3 = {obj1,obj2} //object in an object
//const obj3 = Object.assign(obj1,obj2); //puts source obj in target object, obj1 is target and obj2 is source
//console.log(obj3);
const obj3 ={...obj1,...obj2,...{5:'8'}}; //spread operator
console.log(obj3);
// const obj4 = Object.assign({},obj1,obj2,{5:'e'}); //obj1, obj2 and other obj are all source and {} is target object
//console.log(obj1);
// console.log(obj4);

const users=[
    {
        id:1,
        email:"email@gmail.com"
    },
    {
        id:2,
        email:"email328@gmail.com"
    },
    {
        id:3,
        email:"email345@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(Object.keys(user));
// console.log(Object.values(user));
//console.log(Object.entries(user)); // Converts the 'user' object into an array of key-value pairs
//console.log(user.hasOwnProperty('isLoggedIn')); // true

//################# object destructuring #################

const course={
    courseName :"JS",
    price:"999",
    courseInstructor:"albert"
}

// const {courseInstructor}=course;
const {courseInstructor:instuctor}=course; // assigning custom name 

console.log(instuctor);
