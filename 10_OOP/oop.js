const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this)
function User(username,loginCount,isLoggedIn){ //arrow function doesnt work
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
        this.greeting = ()=>{
            console.log(`welcome,${this.username}`);
            
        }
    return this;
}

const userOne = new User('anan',5,true);
const userTwo = new User('rehmat',7,false);

// console.log(userOne);
console.log(userOne.constructor);
userOne.greeting();
// console.log(userTwo);

