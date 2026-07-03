
const premios = [
"⚽ Balón del Mundial",
"👕 Camisa de Colombia",
"🧢 Gorra de Colombia",
"📱 Forro Siliconado",
"💎 Vidrio Premium"
];

const formulario=document.getElementById("formulario");
const ruleta=document.getElementById("ruleta");
const wheel=document.getElementById("wheel");
const boton=document.getElementById("girar");
const resultado=document.getElementById("resultado");

formulario.addEventListener("submit",function(e){

e.preventDefault();

formulario.style.display="none";

ruleta.style.display="block";

});

boton.addEventListener("click",()=>{

const premio=Math.floor(Math.random()*premios.length);

const giro=360*6+(premio*72);

wheel.style.transform=`rotate(${giro}deg)`;

setTimeout(()=>{

resultado.innerHTML="🎉 Ganaste: <br><b>"+premios[premio]+"</b>";

},5000);

});
