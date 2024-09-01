// reduce

const mynums = [1,2,3]

const myTotal = mynums.reduce((accumulator,currentVal)=>{
        //console.log(`accumulator: ${accumulator}, currentVal: ${currentVal}`);
        
        return accumulator + currentVal;
},0) //default accumulator value, if not provided then zero by default

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((accumulator,item)=>{
        return accumulator+item.price ;
},0)

console.log(totalPrice);

