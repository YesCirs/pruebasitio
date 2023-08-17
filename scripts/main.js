


// Esto es un comentario

/*function multiplica(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}*/
let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/diseño-y-desarrollo-de-sitios-web.jpg") {
    miImage.setAttribute("src", "images/duda.png");
  } else {
    miImage.setAttribute("src", "images/diseño-y-desarrollo-de-sitios-web.jpg");
  }
};
/*document.querySelector("html").onclick = function () {
  if (primeravisita !== 1) {
  alert("Registrate para continuar");
  }
}*/    
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h2");
function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    alert("Registrate para continuar o pincha en cambiar de usuario si desea modificarlo")
    //estableceNombreUsuario();
      miNombre = "Mr. or Mrs. Unnamed";
    miTitulo.innerHTML = "Esta página se está mejorando en estos momentos, " + miNombre;
  } else {
      primeravisita = 1;
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Esta página se está mejorando en estos momentos, " + miNombre;
  }
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Esta página se está mejorando en estos momentos, " + nombreAlmacenado;
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};