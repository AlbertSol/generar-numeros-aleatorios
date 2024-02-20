// funcion para generar aleatorios

function generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);


}

function eventoBotonClick() {
    //Genera un numero aleatorio entre valores del 1 al 5.
    var numero = generarNumero(1, 5);
    var imagenPath = "assets/" + numero + ".jpg";
    // Muestra el numero aleatroio en el elemento ID.
    document.getElementById("Tablero").innerText = "Numero Aleatroio " + numero;
    document.getElementById("TableroImagen").src = imagenPath;
    document.getElementById("TableroImagen").classList.add("small"); // Aplica la clase "small"
}

// Agregar un evneto listener al boton para que llame a la funtion eventoBotonClick al hacer click en el.
document.getElementById("numeroAzar").addEventListener("click", eventoBotonClick);