document.getElementById("btnAltaUsuario").addEventListener("click", function() {
    document.querySelector(".formularioAltaUsuario").style.display = "flex";
});

document.getElementById("btnCerrarAltaUsuario").addEventListener("click", function() {
    document.querySelector(".formularioAltaUsuario").style.display = "none";
});

document.getElementById("formAlta").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const cedulaIngresada = document.getElementById("cedula").value;
    const nombreIngresado = document.getElementById("nombre").value;
    const apellidoIngresado = document.getElementById("apellido").value;
    const cargoIngresado = document.getElementById("cargo").value;

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
    const tbody = document.getElementById("tablaEmpleados"); 
    
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${objEmpleado.cedula}</td>
        <td>${objEmpleado.nombre}</td>
        <td>${objEmpleado.apellido}</td>
        <td>${objEmpleado.cargo}</td>
        <td>
            <button class="btn-modificar">Modificar</button>
            <button class="btn-baja">Borrar</button>
        </td>
    `;

    fila.querySelector(".btn-baja").addEventListener("click", function() {
        fila.remove();
    });

    tbody.appendChild(fila);
}