function valorinput(mensaje) {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = mensaje;
}

function BorrarMensaje() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}

function BorrarMensajeUnoPorUno() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
}

function BorrarMensajeTexto() {
    const pantalla1 = document.getElementById("pantalla1");
    pantalla1.value = pantalla1.value.slice(0, -1);
}

function BorrarMensajeTexto1 () {
    const pantalla1 = document.getElementById("pantalla1");
    pantalla1.value = "";
}
