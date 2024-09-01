var a =300;

if(true){
    var a = 0;
}
console.log(a); //0



console.log(addone(5)) //correct //hoisting 

function addone(num){
    return num + 1
}



// addTwo(5) //not hoisted //error because function is stored in a variable
const addTwo = function(num){
    return num + 2
}