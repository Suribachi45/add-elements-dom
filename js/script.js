 // Aquí tu código
  // Obtener referencias a los elementos del DOM
  
// Obtener referencias a los elementos HTML
const lista = document.getElementById('lista');
const boton = document.getElementById('agregar');

// Agregar un event listener al botón
boton.addEventListener('click', () => {
    // Obtener el valor ingresado por el usuario
    const nuevoElemento = prompt('Ingrese un nuevo elemento:');

    // Crear un nuevo elemento de lista (li)
    const li = document.createElement('li');
    li.textContent = nuevoElemento;

    // Agregar el nuevo elemento a la lista
    lista.appendChild(li);
});