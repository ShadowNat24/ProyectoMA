document.getElementById("btnAltaUsuario").addEventListener("click", function () {
    document.querySelector(".formularioAltaUsuario").style.display = "flex";
});

document.getElementById("btnCerrarAltaUsuario").addEventListener("click", function () {
    document.querySelector(".formularioAltaUsuario").style.display = "none";
});

document.getElementById("btnVolverArriba").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});