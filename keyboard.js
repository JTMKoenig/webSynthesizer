
var audio_context = window.AudioContext || window
  .webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();

osc.connect(con.destination);

osc.frequency.value = 300;

osc.start();

function setNote(key){
  if (key ==" "){
    //stop osc
    osc.frequency.value = 0;
  }
  if (key =="z"){
    //play a c
    osc.frequency.value = 261.63;
  }
  if (key =="x"){
    //play a d
    osc.frequency.value = 293.66;
  }
  if (key =="c"){
    //play an e
    osc.frequency.value = 329.63;
  }
  if (key =="v"){
    //play a f
    osc.frequency.value = 349.23;
  }

}
