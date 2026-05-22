document.getElementById("btnAltaUsuario").addEventListener("click", function() {
    document.querySelector(".formularioAltaUsuario").style.display = "flex";
});

document.getElementById("btnCerrarAltaUsuario").addEventListener("click", function() {
    document.querySelector(".formularioAltaUsuario").style.display = "none";
});

document.getElementById("formAlta").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Captura de datos en variables simples
    const cedulaIngresada = document.getElementById("cedula").value;
    const nombreIngresado = document.getElementById("nombre").value;
    const apellidoIngresado = document.getElementById("apellido").value;
    const cargoIngresado = document.getElementById("cargo").value;

    // Creación del objeto literal tal cual pide la actividad
    const empleado = {
        cedula: cedulaIngresada,
        nombre: nombreIngresado,
        apellido: apellidoIngresado,
        cargo: cargoIngresado
    };

    agregarFilaTabla(empleado);
    
    document.querySelector(".formularioAltaUsuario").style.display = "none";
    this.reset();
});

function agregarFilaTabla(objEmpleado) {
    const tbody = document.getElementById("tabla-empleados");
    
    // Creamos la fila vacía
    const fila = document.createElement("tr");

    // Usamos el método innerHTML del ejemplo del profe Leandro para armar las celdas
    fila.innerHTML = `
        <td>${objEmpleado.cedula}</td>
        <td>${objEmpleado.nombre}</td>
        <td>${objEmpleado.apellido}</td>
        <td>${objEmpleado.cargo}</td>
        <td>
            <button class="btn-modificar">Modificar</button>
            <button class="btn-baja" style="background-color: #ff6666;">Baja</button>
        </td>
    `;

    // Le damos funcionamiento al botón de borrar de esta fila específica
    fila.querySelector(".btn-baja").addEventListener("click", function() {
        fila.remove();
    });

    // Enganchamos la fila terminada en la tabla
    tbody.appendChild(fila);
}
