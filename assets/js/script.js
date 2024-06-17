function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Asignar el color inicial verde al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const ele = document.getElementById("ele1");
    pintar(ele);
    
    // Agregar el evento click para cambiar el color a amarillo
    ele.addEventListener("click", function() {
        pintar(ele, 'yellow');
    });
});