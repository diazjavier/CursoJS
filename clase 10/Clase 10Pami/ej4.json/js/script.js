window.addEventListener('load', function(){

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

function crearTabla(arr){
    let tabla = document.createElement('table');
    let encabezado = document.createElement('tr');

    //itero el objeto con indice 0 y tomo el nombre de cada propiedad en cada iteracion, le pongo el texto del nombre de la propiedad y lo inserto en el primer tr (fila)
    for(prop in arr[0]){
        let th = document.createElement('th');
        th.textContent = prop;
        th.setAttribute("style", "background: lightblue");
        encabezado.appendChild(th);
    }
    tabla.appendChild(encabezado); //inserto la fila de tìtulos a la tabla

    //Ahora itero por cada persona y cargo en una fila los atributos de la persona
    for(let i=0; i < arr.length; i++){
        let fila = document.createElement('tr');
        for(prop in arr[i]){
            let celda = document.createElement('td');
            if (i%2){
                celda.setAttribute("style", "background: rgb(200, 200, 200)");
            }
            celda.textContent = arr[i][prop];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila); //inserto la nueva fila en la tabla
    }
    //tabla.setAttribute("border", "1px solid green"); //Ojo que el rojo está en el css
    //tabla.setAttribute("style", "border-collapse: collapse");
    //tabla.setAttribute("style", "border: green");
    tabla.setAttribute("class", "table table-striped table-hover");
    return tabla;
}
