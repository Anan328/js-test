const coding = ['js','swift','node','react']

// coding.map(code=>{
//     console.log(code); 
// })
// coding.forEach((code)=>{
//     console.log(code); 
// })
// coding.forEach(function (code){
//     console.log(code); 
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe);

coding.forEach((code,index,arr)=>{
    //console.log(code,index,arr); 
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(mycode=>{
    console.log(`${mycode.languageName} : ${mycode.languageFileName}`); 
})