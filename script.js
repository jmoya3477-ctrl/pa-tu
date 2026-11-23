const boton = document.getElementById('botonSorpresa');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    mensaje.textContent = "Quería recordarte lo mucho que te amooooooooooooo 🩵";
    boton.style.display = 'none';
});