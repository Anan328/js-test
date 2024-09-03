const submit = document.querySelector('#subt');
const result = document.getElementById('result');
const previousGuess = document.getElementsByClassName("guesses")[0];
const lastResult = document.getElementsByClassName('lastResult')[0];
const hint = document.getElementsByClassName('lowOrHi')[0];
const random = Math.floor(Math.random()*100+1);
console.log(random);
const guessList = [];

const correctGuess = (text)=>{
    result.innerHTML = 'Who hoo!! correct guess';
    result.style.backgroundColor = "green";
    previousGuess.innerHTML = text;
    setTimeout(function (){
      alert("Congratuations, You won!!, play again");
      window.location.reload();
    },100)
}

const wrongGuess = (newResult,text)=>{
    if(text < random){
    hint.innerHTML = "Number is too low!!"
    }else{
    hint.innerHTML = "Number is too high!!"
    }
    lastResult.innerHTML = String(newResult);
    result.innerHTML = 'Ah auu!! wrong guess';
    result.style.backgroundColor = "red";
    guessList.push(text)
    previousGuess.innerHTML = guessList;
}

const remainingGuesses = (newResult)=>{
  if(newResult==0){
    alert("You lost all the guesses!!, play again");
    result.innerHTML = 'You lost all the guesses!!';
    result.style.backgroundColor = "red";
    submit.disabled = true;
    window.location.reload();
  }
}
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const text = document.getElementById('guessField').value;
    let newResult = parseInt(lastResult.innerHTML);
    if(random == text && text!=""){
      correctGuess(text)
    }else if(random != text && text!=""){
      newResult-=1;
      //console.log(newResult);
      remainingGuesses(newResult)
      wrongGuess(newResult,text)
    }


})