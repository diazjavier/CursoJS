window.addEventListener('load', function(){
    let boton = this.document.getElementById("btn");
    boton.addEventListener('click', traerTexto);
});

function traerTexto(){
    let xhr = new XMLHttpRequest();
    //Hay 4 estados de una petición. Nos interesa el estado 4 que es cuando finaliza
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            document.getElementById('loader').innerHTML = "";
            //El estado 200 es cuando està ok
            if(xhr.status == 200){
                let info = document.getElementById('info');
                info.innerText = xhr.responseText;
            }
            else{
                //Opciones para mostrar errores en la consola
                console.log(xhr.status + " : " +xhr.statusText);
                console.error(xhr.status + " : " +xhr.statusText);
                console.warn(xhr.status + " : " +xhr.statusText);
            }
        }else{
            let span = document.getElementById('loader');
            span.innerHTML = "<img src='./images/spin.gif'></img>";
        }

    } 
//    xhr.open('GET', './ñklsadmclkmsdclkmn.txt', true);
    xhr.open('GET', './documento.txt', true);
    xhr.send();
}