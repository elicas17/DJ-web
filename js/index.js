function iniciar() { 
    const fila=document.querySelector('.contenedor-carrusel');
    const musicas = document.querySelectorAll('.musica');

    const fizq=document.getElementById('flecha-izquierda');
    const fdch=document.getElementById('flecha-derecha');

    // audios
    var boton=document.getElementById('img1'); 
    boton.addEventListener('click', presionar1, false); 
    var boton2=document.getElementById('img2'); 
    boton2.addEventListener('click', presionar2, false); 
    var boton3=document.getElementById('img3'); 
    boton3.addEventListener('click', presionar3, false); 
    var boton4=document.getElementById('img4'); 
    boton4.addEventListener('click', presionar4, false); 
    var boton5=document.getElementById('img5'); 
    boton5.addEventListener('click', presionar5, false); 
    var boton6=document.getElementById('img6'); 
    boton6.addEventListener('click', presionar6, false); 
    var boton7=document.getElementById('img7'); 
    boton7.addEventListener('click', presionar7, false); 


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

    // reproduccion audios
    function presionar1() { 
        var audio1=document.getElementById('aud1');
        if(!audio1.paused && !audio1.ended)   { 
        audio1.pause();  
        } else  { 
            audio1.play();   
        }   
    } 
    function presionar2(){ 
        var audio2=document.getElementById('aud2'); 
        if(!audio2.paused && !audio2.ended)   { 
        audio2.pause();        
        } else  { 
            audio2.play(); 
        }
    } 
    function presionar3(){ 
        var audio3=document.getElementById('aud3'); 
        if(!audio3.paused && !audio3.ended){ 
            audio3.pause();    
        } else  { 
            audio3.play();   
        }
    } 
    function presionar4() { 
        var audio4=document.getElementById('aud4'); 
        if(!audio4.paused && !audio4.ended)   { 
        audio4.pause();   
        } else  { 
            audio4.play();  
        } 
    } 
    function presionar5() { 
        var audio5=document.getElementById('aud5'); 
        if(!audio5.paused && !audio5.ended)   { 
        audio5.pause();   
        } else  { 
            audio5.play();  
        } 
    } 
    function presionar4() { 
        var audio6=document.getElementById('aud6'); 
        if(!audio6.paused && !audio6.ended)   { 
        audio6.pause();   
        } else  { 
            audio6.play();  
        } 
    } 
    function presionar4() { 
        var audio7=document.getElementById('aud7'); 
        if(!audio7.paused && !audio7.ended)   { 
        audio7.pause();   
        } else  { 
            audio7.play();  
        } 
    } 
}
 window.addEventListener('load', iniciar, false); 




