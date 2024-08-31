const my_date = new Date();
// console.log(my_date);
// console.log(my_date.toString());
// console.log(my_date.toJSON());
// console.log(my_date.toISOString());
// console.log(my_date.toLocaleDateString());
// console.log(my_date.toLocaleString());
// console.log(typeof my_date); //object

const createdDate = new Date(2024,7,31); //month starts from zero
// console.log(createdDate);
// console.log(createdDate.toDateString());

const createdDate1 = new Date("2024-08-31") 
// console.log(createdDate1.toLocaleString());

let timeStamp = Date.now();

// console.log(timeStamp);
// console.log(createdDate.getTime());
// console.log(timeStamp-createdDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //to seconds

const newDate = new Date();
// console.log(newDate.getMonth()+1); //starts from zero
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));





