// Variables
let textoEncriptado;
let textoDesencriptado;

// Llaves de encriptación
const llave_e = "enter";
const llave_i = "imes";
const llave_a = "ai";
const llave_o = "ober";
const llave_u = "ufat";

// Elementos HTML - Textos de entrada y salida
let textoEntrada = document.querySelector('#texto__usuario');
let textoResultado = document.querySelector('#texto__resultado');

// Elementos HTML que aparecen o desaparecen
const imagenBusqueda = document.getElementById('imagen__busqueda');
const mensaje1 = document.getElementById('mensaje__1');
const mensaje2 = document.getElementById('mensaje__2');
const textAreaResultado = document.getElementById('texto__resultado');
const botonCopiar = document.getElementById('boton__copiar');


// Funciones

function encriptarTexto() {
    textoDesencriptado = textoEntrada.value;
    textoEncriptado = "";
    let letraAux = "";

    // Ocultar elementos iniciales
    imagenBusqueda.style.display = "none";
    mensaje1.style.display = "none";
    mensaje2.style.display = "none";

    // Mostrar elementos resultantes
    textAreaResultado.style.display = "inline";
    botonCopiar.style.display = "inline";

    // Recorrido letra por letra del texto de usuario
    for (const letra of textoDesencriptado) {
        letraAux = letra;
        // Cambio de letra por llave de cada vocal
        if(letra == "a"){
            letraAux = llave_a;
        } else if(letra == "e"){
            letraAux = llave_e;
        } else if(letra == "i"){
            letraAux = llave_i;
        } else if(letra == "o"){
            letraAux = llave_o;
        } else if(letra == "u"){
            letraAux = llave_u;
        }
        textoEncriptado += letraAux;
    }
    // Texto encriptado en pantalla
    textoResultado.value = textoEncriptado;
}

function desencriptarTexto() {
    textoEncriptado = textoEntrada.value;

    // Cambio de llaves por vocales
    textoDesencriptado = textoEncriptado.replaceAll(llave_a,"a");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_e,"e");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_i,"i");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_o,"o");
    textoDesencriptado = textoDesencriptado.replaceAll(llave_u,"u");

    // Texto desencriptado en pantalla
    textoResultado.value = textoDesencriptado;
}

function copiarTexto() {
    navigator.clipboard.writeText(textoResultado.value)
}

function validarFormato(){
    let textoValidado = textoEntrada.value.toLowerCase();
    textoEntrada.value = textoValidado.replaceAll(!/[a-z|\s]/g,'5');
}