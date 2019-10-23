
window.addEventListener('load', function(){

    let boton = document.getElementById('btn');
    //console.log(boton.textContent);

    boton.textContent = "Ya";

    boton.addEventListener('click', cambiarColor);

    function cambiarColor(e){
        e.target.setAttribute('style', "background:red");
    }
});