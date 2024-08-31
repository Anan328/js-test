const arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]=3);
// console.log(arr);
const arr2 = arr; //arr2 also gets updated ie shallow copy-> same refrence pt
// console.log(arr2);

const arr3 = new Array(1,2,3,4);
// console.log(arr3);

// Array Methods
arr.push(6);
arr.push(7);
arr.pop()
arr.unshift(9,5) // adds one or more elements to the beginning of an array
arr.shift()//removes the first element from an array
// console.log(arr);
// console.log(arr.includes(6)); //true
// console.log(arr.indexOf(6));
// console.log(arr.indexOf(9)); //-1 -> not present

const newArr = arr.join();
// console.log(arr); //typeof-> object
// console.log(newArr); //typeof-> string

// slice splice

const myarr = arr.slice(1,3); //last index not included
console.log(myarr);

const myarr2 = arr.splice(1,3); //last index  included and manuplates the original array by removing the spliced portion
console.log(arr);

console.log(myarr2);




