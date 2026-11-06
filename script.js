
const hora = new Date().getHours();
const saludo = document.getElementById("saludo");

if (hora >= 6 && hora < 12) {
    saludo.textContent = "¡Buenos días! 🌸";
} else if (hora >= 12 && hora < 20) {
    saludo.textContent = "¡Buenas tardes! ✨";
} else {
    saludo.textContent = "¡Buenas noches! 🌙";
}

const botonTema = document.getElementById("btn-tema");
botonTema.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        botonTema.textContent = "Modo Claro Rosado";
    } else {
        botonTema.textContent = "Modo Oscuro Rosado";
    }
});

// 3. Botón "Ver más / Ver menos" (Sección 3.4 - Obligatorio/Complementario)
const botonVerMas = document.getElementById("btn-ver-mas");
const textoExtra = document.getElementById("texto-extra");

botonVerMas.addEventListener("click", function () {
    textoExtra.classList.toggle("oculto");
    if (textoExtra.classList.contains("oculto")) {
        botonVerMas.textContent = "Ver más";
    } else {
        botonVerMas.textContent = "Ver menos";
    }
});


const btnArriba = document.getElementById("btn-arriba");
btnArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});