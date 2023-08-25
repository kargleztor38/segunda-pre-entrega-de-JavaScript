import { inicio, barcelona, roma, paris, londres } from './ciudades.js';

const arrayParaCiudades = [
    inicio,
    barcelona,
    roma,
    paris,
    londres
];

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
        'Inicio': arrayParaCiudades[0],
        'Barcelona': arrayParaCiudades[1],
        'Roma': arrayParaCiudades[2],
        'París': arrayParaCiudades[3],
        'Londres': arrayParaCiudades[4]
    };
    return contenido[enlace];
}