const enviarLocal = () => {

    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    telefono = Number(document.getElementById('telefono').value);
    direccion = document.getElementById('direccion').value;
    descripcion = document.getElementById('observaciones').value;

    if (nombre == "" || apellido == "" || telefono == 0 || direccion == "") {
        swal({
            title: "Error!",
            text: "¡Debe llenar todos los campos!",
            icon: "error",
        });
    } else if (isNaN(telefono)) {
        swal({
            title: "Error!",
            text: "¡El campo de Teléfono debe ser numerico!",
            icon: "error",
        });
    } else {
        localStorage.setItem("Nombre", JSON.stringify(nombre));
        localStorage.setItem("Apellido", JSON.stringify(apellido));
        localStorage.setItem("Telefono", JSON.stringify(telefono));
        localStorage.setItem("Direccion", JSON.stringify(direccion));
        localStorage.setItem("Descripcion", JSON.stringify(descripcion));
        swal({
            title: "Good job!",
            text: "Los datos fueron registrados!",
            icon: "success",
        });
    }
}

let enviar = document.querySelector('#enviar');
enviar.addEventListener('click', enviarLocal, true);

let nombre,
    apellido,
    telefono,
    direccion,
    descripcion;