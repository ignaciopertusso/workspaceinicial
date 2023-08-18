

const contrasena = document.getElementById("floatingPassword");
const botonMostrarContrasena = document.getElementById("mostrarContrasena");

botonMostrarContrasena.addEventListener("click", function () {
  if (contrasena.type === "password") {
    contrasena.type = "text";
    botonMostrarContrasena.textContent = "Ocultar contraseña";
  } else {
    contrasena.type = "password";
    botonMostrarContrasena.textContent = "Mostrar contraseña";
  }
});
