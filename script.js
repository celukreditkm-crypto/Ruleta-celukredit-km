document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = formulario.querySelector('input[type="text"]').value.trim();
    const cedula = formulario.querySelector('input[type="number"]').value.trim();
    const acepta = formulario.querySelector('input[type="checkbox"]').checked;

    if (nombre === "" || cedula === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!acepta) {
      alert("Debes aceptar el tratamiento de datos.");
      return;
    }

    alert("¡Datos enviados correctamente! Ahora iniciará la ruleta.");

    // Aquí después agregaremos la ruleta.
  });
});
