//importando do html
//criando var  



var h = 00;
var m = 00;
var s = 00;
var ms= 00;
var interval; 

//function

function start (){
stop()
  {interval = setInterval(mls,10)}

}

function m10(){
  if (ms<10 && ms !=0) {ms="0"+ms}
  if (s<10) {s="0"+s};
  if (m<10) {m="0"+m};
  if (h<10) {h="0"+h};
}

function mls(){
  var miliseconds = document.getElementById("mls");
  ms++;
  m10();
  if (ms < 99){miliseconds.innerHTML = ms ;}
  else sec();
}
function sec(){
  ms=00
  var seconds = document.getElementById("sec");
  s++;
  m10();
  if(s<60){seconds.innerHTML = s ;}
  else min();
}
function min(){
  s=0;
  m++;
  m10();
  var minutes = document.getElementById("min");
  if(m<60){minutes.innerHTML = m ;}
  else hor();
}
function hor(){
  m=0;
  h++;
  m10();
  var hours = document.getElementById("hour");
  if(h<24){hours.innerHTML = h ;}}

function stop(){
  clearInterval(interval);
}
function restart(){
  s="0"
  m="0"
  h="0"
  
}
function zero(){
  document.location.reload(true);
}