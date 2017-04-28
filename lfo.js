
var audio_context = window.AudioContext || window
  .webkitAudioContext;

var con = new audio_context();

var osc = con.createOscillator();
var lfo = con.createOscillator();
var osc2 = con.createOscillator();

var lfo_amp = con.createGain();
lfo_amp.gain.value = 200;

osc.frequency.value = 600;
osc2.frequency.value = 800;
lfo.frequency.value = 12;

lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency);
osc.connect(con.destination);
osc2.connect(con.destination);

//osc start
osc.start();
osc2.start()
lfo.start();

function setNote(key){
  if (key =="a"){
    //frequency -100
    osc2.frequency.value -= 100;
  }
  if (key =="s"){
    //frequency +100
    osc2.frequency.value += 100;
  }
}
