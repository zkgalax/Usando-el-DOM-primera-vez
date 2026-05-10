function valorinput(mensaje) {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = mensaje;
}

function BorrarMensaje() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}