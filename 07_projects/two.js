const result = document.getElementById("result");
const button = document.querySelector('button');
const BMI = ()=>{
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const heightInMeters = Number(height)/100;
  const bmiNumber = Number(weight) / ((heightInMeters)^2);
  result.innerText = String(Math.round(bmiNumber));
}
 button.addEventListener('click',BMI)


