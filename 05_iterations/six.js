const coding = ['js','swift','node','react']
 
// for each does not return any values

const item = coding.forEach(code=>{
    return code;
})

//console.log(item); // undefined

const mynums = [1,2,3,4,5,6,7,8,9,10]

 const bigNumbers = mynums.filter(mynum=>mynum>5) //explicit return


// const bigNumbers = mynums.filter((mynum)=>{
//    return mynum>5 //implicit return
// })

console.log(bigNumbers);
