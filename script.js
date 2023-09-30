const words=['apple','ball','cat','dog','elephant','fish','gr apes','hen','ice  cream','jug ']
var targetText=words[(Math.floor(Math.random()*words.length))]
displayrandomtext(targetText);

console.log(targetText)
function displayrandomtext(targetText){
  targetText=targetText.split("");
  textlen=targetText.length-1;
  for (let i=0;i<textlen;i++){
    tmp=targetText[i];
    randindex=Math.floor(Math.random()*textlen);
    targetText[i]=targetText[randindex];
    targetText[randindex]=tmp;
  }
  console.log(targetText);
  targetText=targetText.join('');
  document.getElementById('displayedtext').innerHTML=targetText;  
}
var targetTextNext=words[(Math.floor(Math.random()*words.length))]
 function next(targetTextNext){
    displayrandomtext(targetTextNext);
}
function checkguess(){
  const guess=guessinput.value.toLowerCase();
  if(guess==targetTextNext){
    message.innerHTML='congrates you guess the word ';
    message.style.color='blue';
   }

   if(guess==targetText){
    message.innerHTML='congrates you guess the word ';
    message.style.color='blue';
   }
  else {
     alert(message.innerHTML='sorry you guess the was wrong please try again ');
     message.style.color='red';

  }
}

  
function history(){
  window.back()
}

function openpopup(){
  popup.classList.add("open-popup");
}
