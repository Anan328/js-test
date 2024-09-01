const coding = ['js','swift','node','react']
 
// for each does not return any values

const item = coding.forEach(code=>{
    return code;
})

//console.log(item); // undefined

const mynums = [1,2,3,4,5,6,7,8,9,10]

 const bigNumbers = mynums.filter(mynum=>mynum>5) //explicit return


// const bigNumbers = mynums.filter((mynum)=>{
//    return mynum > 5 //implicit return
// })

//console.log(bigNumbers);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const newBook = books.filter(book=>{
    return book.genre=='Science' && book.publish>=2000;
})
console.log(newBook);

// const newBook = books.map(book=>{
//     if(book.genre==='Science'){
//         return book;
//     }
       // if condition is not met, returns undefined
// })

// console.log(newBook);

