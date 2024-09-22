// main.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js cargado correctamente");

    // Función para manejar el envío de formularios de contacto
    const form = document.querySelector("#contacto form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita la recarga de la página
        
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const mensaje = document.querySelector("#mensaje").value;

        // Validación simple
        if (nombre && email && mensaje) {
            alert(`Gracias, ${nombre}, tu mensaje ha sido enviado correctamente.`);
            form.reset(); // Reinicia el formulario
        } else {
            alert("Por favor completa todos los campos antes de enviar.");
        }
    });

    // Función para navegar entre secciones
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionID = this.getAttribute('href');
            document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Otras funcionalidades que quieras agregar
    console.log("Las funcionalidades de la página se han cargado correctamente.");
});
