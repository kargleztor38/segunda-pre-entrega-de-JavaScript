// Función para obtener tareas del almacenamiento local.
function obtenerTarea() {
    let tareas;
    if (localStorage.getItem('tareas') === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem('tareas'));
    }
    return tareas;
}

// Función para agregar una tarea
function agregarTarea(tarea) {
    const tareas = obtenerTarea();
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para eliminar una tarea
function eliminarTarea(textoTarea) {
    const tareas = obtenerTarea();
    const index = tareas.indexOf(textoTarea);
    if (index !== -1) {
        tareas.splice(index, 1);
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));
}


// Función para mostrar tareas en el DOM
function mostrarTareas() {
    const tareas = obtenerTarea();
    const ul = document.getElementById('listaTarea');
    ul.innerHTML = "";
    tareas.forEach(function(textoTarea) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(textoTarea));
        const btnBorrar = document.createElement('button');
        btnBorrar.appendChild(document.createTextNode('Borrar'));
        li.appendChild(btnBorrar);
        ul.appendChild(li);
    });
}

// Oyente de eventos para envío de formularios
document.getElementById('formularioTarea').addEventListener('submit', function (e) {
    e.preventDefault();
    const textoTarea = document.getElementById('tarea').value;
    agregarTarea(textoTarea);
    document.getElementById('tarea').value = '';
    mostrarTareas();
});

// Oyente de eventos para eliminación de tareas
document.getElementById('listaTarea').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const textoTarea = e.target.parentElement.firstChild.textContent;
        eliminarTarea(textoTarea);
        mostrarTareas();
    };
});

// Visualización inicial de tareas.
mostrarTareas();