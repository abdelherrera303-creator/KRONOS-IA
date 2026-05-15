const wake = new webkitSpeechRecognition();

wake.continuous = true;
wake.lang = navigator.language;

wake.onresult = function(event){

let texto = event.results[event.results.length-1][0].transcript.toLowerCase();

if(texto.includes("kronos")){
activarKronos();
}

};

wake.start();

function activarKronos(){
kronosHablar("Estoy aquí.");
iniciarEscucha();
}
