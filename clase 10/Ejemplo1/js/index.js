window.addEventListener('load', function{
    let form = this.document.forms[0];

    form.addEventListener('submit', function(e){
        e.preventDefault();
        enviarDatos();
    });
});

function enviarDatos(){
    let info = document.getElementById('info');
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    let ironman =JSON.parese(xhr.responseText);
                    info.innerText = ironman.nombre + " " + ironman.apellido;
                }else{
                    info.innerText = xhr.status + ' : ' + xhr.statusText;
                }
            }else{
                info.appendChild(crearSpinner());
            }
        }
        //let url = 'pagina1.php' + trearDatos(); //Útil sólo para el método GET
        //xhr.open('GET', url); //Útil sólo para el método GET
        xhr.open('POST', 'pagina1.php'); //Útil sólo para el método POST
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //Útil sólo para el método POST
        //xhr.send(); //Útil sólo para el método GET
        xhr.send(trearDatos()); //Útil sólo para el método POST
}

function trearDatos(){
    let nombre = document.getElementById('txtNombre').value;
    let edad =  document.getElementById('txtEdad').value;
    //return "?nombre=" + nombre + "&edad=" + edad; //Útil sólo para el método GET
    return "nombre=" + encodeURIComponent(nombre) + "&edad=" + encodeURIComponent(edad); //Útil sólo para el método POST
}

function crearSpinner (){
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './images/476.gif');
    return spinner;
}

