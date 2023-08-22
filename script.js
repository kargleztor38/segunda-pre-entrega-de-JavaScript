import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener los elementos del html (DOM).
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
// Agregar un evento clik a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // remover la clacse active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        })
        // Agregar la clase "active" al enlace seleccionado
        this.classList.add('active');
        // Traer el contenido corespondiente del enlace seleccionado
        let contenido = obtenerContenido(this.textContent);
        // Agregar el contenido de los objetos provenientes de ciudades.js
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo; 
    })
})

// Funcion para traer el contenido correspodiete de ciudades
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}