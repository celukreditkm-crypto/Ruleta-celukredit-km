const premios = [
  "⚽ Balón del Mundial",
  "👕 Camisa de Colombia",
  "🧢 Gorra de Colombia",
  "📱 Forro Siliconado",
  "💎 Vidrio Premium",
  "🎁 Premio Sorpresa"
];

const colores = [
  "#FF4D4D",
  "#1E90FF",
  "#00C853",
  "#FFD600",
  "#8E24AA",
  "#FF6D00"
];

const canvas = document.getElementById("ruleta");
const ctx = canvas.getContext("2d");

const formulario = document.getElementById("formulario");
const ruletaContainer = document.getElementById("ruleta-container");
const botonGirar = document.getElementById("girar");
const premioTexto = document.getElementById("premio");
const whatsapp = document.getElementById("whatsapp");

let nombre = "";
let cedula = "";
let girando = false;
let anguloActual = 0;

function dibujarRuleta() {
    const centro = canvas.width / 2;
    const radio = 160;
    const angulo = (2 * Math.PI) / premios.length;

    for (let i = 0; i < premios.length; i++) {

        ctx.beginPath();
        ctx.moveTo(centro, centro);

        ctx.fillStyle = colores[i];

        ctx.arc(
            centro,
            centro,
            radio
