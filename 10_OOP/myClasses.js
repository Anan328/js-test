class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
Object.prototype.hashPassword = function(){ //don't use arrow function
    return `@#$%%$${this.password}djnencn`;
}
const userOne = new User('anan','example328@hmail.com','04example')
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());
console.log(userOne.hashPassword());


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());