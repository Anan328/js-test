const body = document.querySelector('body');
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let colorFunction;
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const changeColor = ()=>{
  body.style.backgroundColor=randomColor();
}
start.addEventListener('click',()=>{
      colorFunction =  setInterval(changeColor,1000)
})

stop.addEventListener('click',()=>{
      clearInterval(colorFunction)
})