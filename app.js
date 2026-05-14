const chat = document.getElementById("chat");

function enviar(){

const input = document.getElementById("mensaje");
const texto = input.value;

chat.innerHTML += "<p><b>Tú:</b> "+texto+"</p>";

respuestaKronos(texto);

input.value="";
}

function respuestaKronos(texto){

let respuesta = "Estoy aprendiendo...";

if(texto.includes("hola")){
respuesta="Hola. Soy KRONOS.";
}

if(texto.includes("quien eres")){
respuesta="Soy tu IA personal.";
}

chat.innerHTML += "<p><b>Kronos:</b> "+respuesta+"</p>";

chat.scrollTop = chat.scrollHeight;
}
