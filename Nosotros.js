function mover(elemento) {
    elemento.style.transform = "rotate(10deg) translateY(-10px)";
    setTimeout(() => {
        elemento.style.transform = "rotate(0) translateY(0)";
    }, 300);
}

