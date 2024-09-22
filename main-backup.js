// main-backup.js

document.addEventListener("DOMContentLoaded", () => {
    console.warn("main.js no se pudo cargar. Cargando funcionalidades mínimas desde main-backup.js");

    // Función para manejar el envío de formularios de contacto (simplificado)
    const form = document.querySelector("#contacto form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita la recarga de la página
        
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const mensaje = document.querySelector("#mensaje").value;

        // Validación simple
        if (nombre && email && mensaje) {
            alert(`Mensaje enviado por ${nombre}.`);
            form.reset(); // Reinicia el formulario
        } else {
            alert("Completa los campos para enviar.");
        }
    });

    // Navegación básica entre secciones (sin animación smooth)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionID = this.getAttribute('href');
            document.querySelector(sectionID).scrollIntoView();
        });
    });

    // Funcionalidades mínimas implementadas
    console.log("Se han cargado funcionalidades mínimas.");
});
