document.addEventListener("DOMContentLoaded", function () {
    const sections_v2 = document.querySelectorAll('.fade-in');

    sections_v2.forEach(section => {
        section.classList.add('visible');
    });


    var navbar = document.querySelector(".navbar");
    var aboutSection = document.getElementById("about-ipakket");

    // Función para cambiar el color de la barra de navegación
    function changeNavbarColor() {
        var scroll = window.scrollY || window.pageYOffset;

        if (aboutSection) {
            var aboutSectionTop = aboutSection.offsetTop;

            var navbarHeight = navbar.offsetHeight;

            if (scroll > aboutSectionTop - navbarHeight) {
                navbar.style.backgroundColor = "rgb(0, 0, 0, .8)"; 
            } else {
                navbar.style.backgroundColor = "transparent";
            }
        } else {
            console.log("Elemento #about-ipakket no encontrado");
        }
    }

    const sections = document.querySelectorAll('.nubes-section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            // Oculta la sección actual
            const currentSection = document.querySelector('.current-section');
            currentSection.classList.remove('current-section');
            currentSection.classList.add('hidden-section');

            // Muestra la siguiente sección
            section.classList.remove('hidden-section');
            section.classList.add('current-section');
        });
    });
    // Asignar la función al evento de desplazamiento
    window.addEventListener("scroll", changeNavbarColor);

    // Llamar a la función al cargar la página (por si el usuario ya está en la sección #about-ipakket al principio)
    changeNavbarColor();
});