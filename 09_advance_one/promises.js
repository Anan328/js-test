// const promiseOne = new Promise((resolve,reject)=>{
//     // do an async task
//     // dbcalls, crypto, network
//     setTimeout(()=>{
//     console.log('Async task promise one');
//     resolve()
//     },1000)  
// })

// promiseOne.then(()=>{
//     console.log('promise one consumed');  
// })
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task promise two'); 
        resolve()
    },1000)
}).then(()=>{
    console.log('promise two consumed'); 
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task promise three'); 
        resolve({
            username:'anan',
            email:'example328@gmail.com'
        })
    },1000)
})

promiseThree.then((user)=>{
    console.log(user); 
    
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err = false;
        if(!err){
            resolve({
                username:'anan',
                password:'example328'
            })
        }else{
            reject('Error: something went wrong')
        }
        
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username    
})
.then((username)=>{
    console.log(username);
    
})
.catch((err)=>{
    console.log(err);
    
})
.finally(()=>{
    console.log('the promise is either resolved or rejected');
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err = false;
        if(!err){
            resolve({
                username:'rehmat',
                password:'example328'
            })
        }else{
            reject('Error: something went wrong')
        }

    },1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

// async function getUsers(){
//     try {
//         const response =  await fetch('https://randomuser.me//api')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);   
//     }
// }

// getUsers();

fetch('https://randomuser.me//api')
.then((response)=>{
    return response.json()
})
.then(data=>{
    console.log(data);    
    //console.log(data.results[0].name);    
})
.catch(err=>{
    console.log(err);
})