// A getter is a method that retrieves the value of a property, allowing controlled access to it.

// A setter is a method that allows to modify the value of a property, enabling validation or custom logic.

// A getter must be accompanied by a setter

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // same name
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // setters do not return
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);