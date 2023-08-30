import { inicio, barcelona, roma, paris, londres } from './ciudades.js';

const arrayCiudades = [
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


enlaces.forEach(function (recorridoEnlaces) {
    recorridoEnlaces.addEventListener('click', function () {
        enlaces.forEach(function (recorridoEnlaces) {
            recorridoEnlaces.classList.remove('active');
        })

        this.classList.add('active');

        let contenido = contenidoCiudades(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    })
})


function contenidoCiudades(recorridoEnlaces) {
    let contenido = {
        'Inicio': arrayCiudades[0],
        'Barcelona': arrayCiudades[1],
        'Roma': arrayCiudades[2],
        'París': arrayCiudades[3],
        'Londres': arrayCiudades[4]
    }
    return contenido[recorridoEnlaces];
}

let boton = document.getElementById('entrada');

boton.addEventListener('click', function () {

    const historial = [];

    while (true) {
        const menu = prompt("Elija el viaje que desea realizar \n1. Barcelona \n2. Roma \n3. París \n4. Londres \n5. Historial \n6. Salir")

        if (menu === "1") {
            let seleccionViaje = prompt('El recorido por barcelona es de: \n1. $200 tres dias, \n2. $250 cinco dias')
            switch (seleccionViaje) {
                case '1':
                    historial.push(`${seleccionViaje} Barcelona tres dias`);
                    alert('Felicidades su recorido por barcelona ha sido recervado');
                    break;
                case '2':
                    historial.push(`${seleccionViaje} Barcelona cinco dias`);
                    alert('Felicidades su recorido por barcelona ha sido recervado');
                    break;

                default:
                    alert("Esta obcion no es correcta, elija una de la lista")
                    break;
            }

        } else if (menu === "2") {
            let seleccionViaje = prompt('El recorido por Roma es de: \n1. $300 tres dias')
            switch (seleccionViaje) {
                case '1':
                    historial.push(`${seleccionViaje} Roma tres dias`);
                    alert('Felicidades su recorido por Roma ha sido recervado');
                    break;

                default:
                    alert("Esta obcion no es correcta, elija una de la lista")
                    break;
            }

        } else if (menu === "3") {
            let seleccionViaje = prompt('El recorido por París es de: \n1. $350 Dos dias \n2 $400 Cuatro dias')
            switch (seleccionViaje) {
                case '1':
                    historial.push(`${seleccionViaje} París tres dias`);
                    alert('Felicidades su recorido por París ha sido recervado');
                    break;
                case '2':
                    historial.push(`${seleccionViaje} París Cuatro dias`);
                    alert('Felicidades su recorido por París ha sido recervado');
                    break;

                default:
                    alert("Esta obcion no es correcta, elija una de la lista")
                    break;
            }

        } else if (menu === "4") {
            let seleccionViaje = prompt('El recorido por Londres es de: \n1. $390 dos dias')
            switch (seleccionViaje) {
                case '1':
                    historial.push(`${seleccionViaje} Londres tres dias`);
                    alert('Felicidades su recorido por Londres ha sido recervado');
                    break;

                default:
                    alert("Esta obcion no es correcta, elija una de la lista")
                    break;
            }

        } else if (menu === "5") {

            if (historial.length === 0) {

                alert('No hay compras realizadas')

            } else {

                alert('Historial de compras es:\n' + historial.join("\n"));

            }

        } else if (menu === "6") {

            alert("Gracias pro usar nuestro programa. vuelva pronto");

            break;

        } else {

            alert('Obcion incorrecta. Porfavor introdusca una obcion valida');

        };
    };
});

