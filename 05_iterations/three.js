const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);  
}

const greetings = 'Hello World'

for (const greet of greetings) {
    //console.log(greet);
}

// Maps

const map = new Map();

map.set('IN','INDIA')
map.set('UK','UNITED KINGDOM')
map.set('KSA','SAUDI ARABIA')
map.set('KSA','SAUDI ARABIA') //no effect

//console.log(map);

for (const [key,value] of map) {
   //console.log(`key: ${key}, value ${value}`);   
}

for (const [key] in map) {
    console.log(key);  //will not work 
}

const myobj = {
    game1:'gta5',
    game2:'rdr'
}

//objects are not iterable incase of forof loop but we can use forin loop

// for (const key of myobj) {
//    console.log(key);
    
// }