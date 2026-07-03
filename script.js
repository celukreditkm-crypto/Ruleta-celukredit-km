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
            radio,
            i * angulo,
            (i + 1) * angulo
        );

        ctx.fill();

        ctx.save();

        ctx.translate(centro, centro);
        ctx.rotate(i * angulo + angulo / 2);

        ctx.fillStyle = "white";
        ctx.font = "bold 16px Poppins";
        ctx.textAlign = "right";

        ctx.fillText(
            premios[i],
            radio - 20,
            8
        );

        ctx.restore();
    }
}
dibujarRuleta();

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    nombre = document.querySelector('input[type="text"]').value;
    cedula = document.querySelector('input[type="number"]').value;

    formulario.style.display = "none";
    ruletaContainer.style.display = "block";
});

botonGirar.addEventListener("click", function() {

    if (girando) return;

    girando = true;

    const ganador = Math.floor(Math.random() * premios.length);

    const vueltas = 6;
    const anguloSector = 360 / premios.length;

    const destino =
        vueltas * 360 +
        (360 - ganador * anguloSector - anguloSector / 2);

    anguloActual += destino;

    canvas.style.transition = "transform 5s ease-out";
    canvas.style.transform = `rotate(${anguloActual}deg)`;

    setTimeout(() => {

        premioTexto.innerHTML =
            "🎉 Ganaste:<br><b>" + premios[ganador] + "</b>";

        whatsapp.href =
            "https://wa.me/573229421245?text=" +
            encodeURIComponent(
                "Hola, soy " +
                nombre +
                ". Mi cédula es " +
                cedula +
                " y gané: " +
                premios[ganador]
            );

        whatsapp.style.display = "inline-block";

        girando = false;

    }, 5000);

});
