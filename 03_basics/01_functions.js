function add(a,b){
    return a+b;
}

const result = add(3,5);
// console.log(result);

function calculateCartPrice(...num1){ // here its is called rest operator
    return num1;
}
function calculateCartPrice1(val1,val2,...num1){ 
    const result = [val1,val2,num1]
    return result;
}

// console.log(calculateCartPrice(100,200,300,700));
// console.log(calculateCartPrice1(100,200,300,700));

const user = {
    name:"test",
    id:1
}

function handleObject(obj){
    console.log(`username is ${obj.name} and id is ${obj.id}`);
    
}
// handleObject(user);
handleObject({
    name:"test",
    id:2
})
