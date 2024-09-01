const myObject = {
    js:'javaScript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    console.log(`key: ${key}, value: ${myObject[key]}`);     
}

const arr = ['js','css','html']

for (const key in arr) {
    //console.log(key);
    console.log(arr[key]);   
}