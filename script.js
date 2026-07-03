const formulario = document.getElementById("formulario");
const ruletaContainer = document.getElementById("ruleta-container");
const wheel = document.getElementById("wheel");
const botonGirar = document.getElementById("girar");
const resultado = document.getElementById("resultado");

const premios = [
  "⚽ Balón del Mundial",
  "👕 Camisa de Colombia",
  "🧢 Gorra de Colombia",
  "📱 Forro Siliconado",
  "💎 Vidrio Premium",
  "🎁 Premio Sorpresa"
];

let girando = false;

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  formulario.style.display = "none";
  ruletaContainer.style.display = "block";
});

botonGirar.addEventListener("click", function() {

  if (girando) return;

  girando = true;
  resultado.innerHTML = "";

  const premio = Math.floor(Math.random() * premios.length);

  const grados = (360 * 6) + (premio * 60);

  wheel.style.transform = `rotate(-${grados}deg)`;

  setTimeout(() => {

    resultado.innerHTML =
      "🎉 ¡Felicidades! Ganaste:<br><br><b>" +
      premios[premio] +
      "</b>";

    girando = false;

  }, 5200);

});
