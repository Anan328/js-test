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

const userOne = new User('anan','example328@hmail.com','04example')
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());
 