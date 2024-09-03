const buttons = document.querySelectorAll('.button');

const colorChanger = (color)=>{
  console.log("clicked");
  document.body.style.backgroundColor=color;
}
buttons.forEach(button=>{
  button.addEventListener('click',()=>colorChanger(button.id));
})
