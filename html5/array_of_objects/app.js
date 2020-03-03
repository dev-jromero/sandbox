const paciente = [{
        nombre: "Jonathan",
        apellido_paterno: "Romero",
        apellido_materno: "Castillo"
    },

    {
        nombre: "Jheison",
        apellido_paterno: "Mayta",
        apellido_materno: "Caceres"
    }

];

function removeNombre() {
    paciente.forEach(function(obj) {
        delete obj.nombre
    });
    return JSON.stringify(paciente);
}
console.log(removeNombre());