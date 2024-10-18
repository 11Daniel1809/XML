function enviarFormulario() {
    // Capturar informacion del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const anio = document.getElementById("anio").value;
    const telefono = document.getElementById("telefono").value;

    // Crear un documento XML
    const xmlData = `
        <usuario>
            <nombre>${nombre}</nombre>
            <anio>${anio}</anio>
            <email>${email}</email>
            <telefono>${telefono}</telefono>

        </usuario>`;


    // Almacenar el XML en el localStorage
    localStorage.setItem('usuarioXML', xmlData);

    //Redirigir a la página de visualización
    window.location.href = 'visualizar.html';

    // Envitar que el formulario se envie de la manera tradicional
    return false;
}