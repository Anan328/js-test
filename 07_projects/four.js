const submit = document.querySelector('#subt');
const result = document.getElementById('result');
const previousGuess = document.getElementsByClassName("guesses")[0];
const lastResult = document.getElementsByClassName('lastResult')[0];
const hint = document.getElementsByClassName('lowOrHi')[0];
const random = Math.floor(Math.random()*100+1);
console.log(random);
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const text = document.getElementById('guessField').value;
    let newResult = parseInt(lastResult.innerHTML);
    if(random == text && text!=""){
      result.innerHTML = 'Who hoo!! correct guess';
      result.style.backgroundColor = "green";
      previousGuess.innerHTML = text;
      setTimeout(function (){
        alert("Congratuations, You won!!, play again");
       window.location.reload();
      },100)
      
    }else if(random != text && text!=""){
      if(text < random){
            hint.innerHTML = "Number is too low!!"
      }else{
            hint.innerHTML = "Number is too high!!"
      }
      newResult=newResult-1;
      //console.log(newResult);
      lastResult.innerHTML = String(newResult);
      result.innerHTML = 'Ah auu!! wrong guess';
      result.style.backgroundColor = "red";
      previousGuess.innerHTML = text;
      if(newResult==0){
        alert("You lost all the guesses!!, play again");
        result.innerHTML = 'You lost all the guesses!!';
        result.style.backgroundColor = "red";
        submit.disabled = true;
        window.location.reload();
      }
    }


})