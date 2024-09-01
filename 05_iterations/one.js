for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 5; i < 6; i++) {
    //console.log(`Outer loop ${i}`);    
    for (let j = 1; j <= 10; j++) {
        //console.log(`Outer loop ${i} and inner loop ${j}`);
        //console.log(`${i} * ${j} = ${i*j}`);      
    }
}
const myArray=['a','b','c','d']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//myArray.forEach(i=>console.log(i))


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
