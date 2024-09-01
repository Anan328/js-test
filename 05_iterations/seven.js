const mynums = [1,2,3,4,5,6,7,8,9,10]

const newNum = mynums.map((num)=>{
    return num+10;
})

// console.log(newNum);

// chaining

const nums = mynums
    .map((num)=>{
        return num * 10;
    })
    .map((num)=>{
        return num / 2;
    })
    .filter((num)=>{
        return num % 2 == 0;
    })

console.log(nums);

