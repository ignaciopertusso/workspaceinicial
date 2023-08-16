

const inputContrasena = document.getElementById("contrasena");
const botonMostrarContrasena = document.getElementById("mostrarContrasena");

botonMostrarContrasena.addEventListener("click", function () {
  if (inputContrasena.type === "password") {
    inputContrasena.type = "text";
    botonMostrarContrasena.textContent = "Ocultar contraseña";
  } else {
    inputContrasena.type = "password";
    botonMostrarContrasena.textContent = "Mostrar contraseña";
  }
});
