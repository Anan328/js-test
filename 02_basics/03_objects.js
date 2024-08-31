const mySymbol = Symbol("key1");

const jsUser = {
    name: "ANAN",
    "user role":"test-user",
    [mySymbol]: "mykey1",
    age:23,
    location : 'kmr',
    isLoggedIn : false,
    status: function(){
        console.log(`user loggedIn status: ${this.isLoggedIn}`)
    }
};
console.log(jsUser);
// console.log(jsUser.name);
//console.log(jsUser['name']);
// console.log(jsUser.user role); //not possible
// console.log(jsUser['user role']);
//jsUser.status();
// console.log(jsUser[mySymbol]);
// console.log(jsUser.mySymbol);//not possible
// jsUser.isLoggedIn=true;
// jsUser["isLoggedIn"]=false;
// jsUser["isLoggedIn"]=false;
jsUser.greet=function(){
    console.log(`welcome ${this.name}`);
    
}
console.log(jsUser.greet());

Object.freeze(jsUser); //makes an object immutable
// jsUser["isLoggedIn"]=true; //no error but won't work
// console.log(jsUser.isLoggedIn);