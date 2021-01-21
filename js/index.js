const fila=document.querySelector('.contenedor-carrusel');
const musicas = document.querySelectorAll('.musica');

const fizq=document.getElementById('flecha-izquierda');
const fdch=document.getElementById('flecha-derecha');

// event listener para la flecha derecha
fdch.addEventListener('click',() =>{
    fila.scrollLeft = fila.scrollLeft + fila.offsetWidth;
});
// event listener para la flecha izquierda
fizq.addEventListener('click',()=>{
    fila.scrollLeft = fila.scrollLeft - fila.offsetWidth;

});

const numeroPaginas=musicas.length/5;
console.log(numeroPaginas);




