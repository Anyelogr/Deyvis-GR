const texto = "¡Hola, soy desarrollador web!"; // Puedes cambiar este texto
const velocidad = 100; // Velocidad de escritura en ms
let i = 0;

function escribirTexto() {
  if (i < texto.length) {
    document.getElementById("typed-text").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, velocidad);
  }
}

window.onload = escribirTexto;
