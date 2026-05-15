const chat = document.getElementById("chat");

function enviar(){

const input = document.getElementById("mensaje");
const texto = input.value;

chat.innerHTML += "<p><b>Tú:</b> "+texto+"</p>";

respuestaKronos(texto);

input.value="";
}

async function respuestaKronos(texto){kronosHablar(respuesta);

chat.innerHTML += "<p><b>Kronos:</b> pensando...</p>";

const respuesta = await preguntarIA(texto);

chat.innerHTML += "<p><b>Kronos:</b>"+respuesta+"</p>";
}https://tuusuario.github.io/KRONOS-IA
agregarMemoria(texto);
