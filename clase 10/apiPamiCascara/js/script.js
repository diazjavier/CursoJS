const appKey = "f71c390583435dcd4dc989ebe71b6081";

let Temperatura;
let Húmedad;
let Presión;
let Viento;
let Pronóstico;







function enviarDatos(){
    let info = document.getElementById('info');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4){

            if( xhr.status == 200){

                let Personas = JSON.parse(xhr.responseText);
                
                
                info.appendChild(crearTabla(Personas));
            }
            else{
                info.innerText = xhr.status + ' : ' + xhr.statusText;
            }
        }
        else{
            if (!info.hasChildNodes()){
                info.appendChild(crearSpinner());
            }
        }        
    }     

    xhr.open('GET',  'pagina1.php');   

    xhr.send();
}


function crearSpinner(){
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './images/smile.gif');
    return spinner;
}
