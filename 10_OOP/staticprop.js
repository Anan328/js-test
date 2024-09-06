class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
// The `static` keyword defines methods or properties that belong to the class itself and cannot be inherited by instances.
    static createId(){
        return `123`
    }
}

const anan = new User("anan")
// console.log(hitesh.createId())

class Player extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Player("iphone", "i@phone.com")
// console.log(iphone.createId()); // not possible