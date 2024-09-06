class User{
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`Username is : ${this.username}`);    
    }
}

class Player extends User{
    constructor(username,email,password){
        super(username) // in earlier Js we had to use User.call(this, username);
        this.email = email;
        this.password = password;
     }
    view(){
        console.log(`name: ${this.username},email:${this.email},password:${this.password}`);
        
    }
}

const mario = new Player('mario','ex@example.com','ederp')

mario.view()
mario.logMe()

console.log(mario instanceof Player);
console.log(mario instanceof User); // true
