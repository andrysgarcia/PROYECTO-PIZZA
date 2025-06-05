document.addEventListener("DOMContentLoaded", function () {
    const starContainers = document.querySelectorAll(".stars");

    starContainers.forEach(container => {
        const stars = container.querySelectorAll(".star");

        stars.forEach(star => {
            star.addEventListener("click", function () {
                let rating = this.getAttribute("data-value");
                container.setAttribute("data-rating", rating);

                // Quita la clase active de todas las estrellas
                stars.forEach(s => s.classList.remove("active"));

                // Activa las estrellas hasta la seleccionada
                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add("active"); 
                    mm
                }
            });
        });
    });
});
