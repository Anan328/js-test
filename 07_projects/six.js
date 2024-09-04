const body = document.querySelector('body');
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let colorFunction;
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "black",
  "white",
  "gray",
  "brown",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "indigo",
  "violet",
  "gold",
  "silver",
  "navy"
];

const changeColor = ()=>{
  const index  = Math.floor(Math.random()*20)
  body.style.backgroundColor=colors[index]
}
start.addEventListener('click',()=>{
      colorFunction =  setInterval(changeColor,1000)
})

stop.addEventListener('click',()=>{
      clearInterval(colorFunction)
})