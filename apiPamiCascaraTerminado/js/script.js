const apiKey = 'd0f2392c4ed12b60c45646fbba73767b';

let city = "New York, US";









window.addEventListener('load', function(){

    cargarSelectCiudades();

    document.getElementById('selCiudades').addEventListener('change', traerPronostico);
  //  document.getElementById('btnRecargar').addEventListener('click', traerPronosticoCity);

});


function cargarSelectCiudades(){

       traerCiudades();        
       
}

function traerCiudades(){

    // ajax json city.list
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
            if( xhr.readyState == 4){
                if( xhr.status == 200){
                    // Aca va el codigo que se ejecuta cuando la peticion termino y es correcta
                    let datos = JSON.parse( xhr.responseText);
                    let ciudades = parsearArgentinas(datos);

                    actualizarSelect(ciudades);

                    console.log(ciudades);
                }
                else{
                    // Acá va el código a ejecutar cuando se produjo un error en la petición
                    console.error( xhr.status + " " + xhr.statusText);
                }

            }
            else{
                // Acá va el código que se ejecuta mientras se esta procesando la petición(spinner)
            }

    }
    xhr.open('GET', './city.list.json', true);
    xhr.send();

}

function parsearArgentinas(arr){

    return arr.filter(ciudad=> ciudad.country === "AR")
       .map(ciudad=> ({ id: ciudad.id, nombre : ciudad.name + ", " + ciudad.country}));
   
}

function traerPronostico(){
    let divActualizacion =   document.getElementById('act');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
            if( xhr.readyState == 4){
                if( xhr.status == 200){
                    // Aca va el codigo que se ejecuta cuando la peticion termino y es correcta
                    let pronostico = JSON.parse( xhr.responseText);
                    
                   // console.log(pronostico);
                  // document.getElementById('info').innerText = xhr.responseText;
                    actualizarPronostico(pronostico);
                    
                   // divActualizacion.innerHTML ="";
                    
                   
                }
                else{
                    // Acá va el código a ejecutar cuando se produjo un error en la petición
                    console.error( xhr.status + " " + xhr.statusText);
                }

            }
            else{
                // Acá va el código que se ejecuta mientras se esta procesando la petición(spinner)
            
             
              divActualizacion.innerHTML = '<img src="./images/anemometro.gif" />';
            }

    }
    xhr.open('GET', armarURL() , true);
    xhr.send();

}

function actualizarSelect(ciudades){

    let selCiudades = document.getElementById('selCiudades');
   // console.log(ciudades);
    for(ciudad of ciudades){
        let opcion = document.createElement('option');
        opcion.setAttribute('value', ciudad.id );
        let texto = document.createTextNode(ciudad.nombre);
        opcion.appendChild(texto);
        selCiudades.appendChild(opcion);
    }
}

function armarURL(){

    let idCiudad = document.getElementById('selCiudades').value;
    let url = "http://api.openweathermap.org/data/2.5/weather?id=" + idCiudad
     + "&lang=es&units=metric&APPID=" + apiKey;

     return url;
}

function actualizarPronostico(pronostico){

    document.getElementById('temperatura').innerText = "Temperatura: "+  (pronostico.main.temp).toFixed(1) + " ºC";
    document.getElementById('humedad').innerText = "Humedad: "+  pronostico.main.humidity + " %";
    document.getElementById('presion').innerText = "Presión: "+  pronostico.main.pressure + " hPa";
    document.getElementById('viento').innerText = "Viento: "+  (pronostico.wind.speed * 3.6).toFixed(0) + " Km/h";
    document.getElementById('descripcion').innerText = "Se espera "+  pronostico.weather[0].description;
    document.getElementById('minmax').innerText = "Máxima: "+ (pronostico.main.temp_max).toFixed(1) + " °C / Minima: " + (pronostico.main.temp_min).toFixed(1) +" ° C";
    document.getElementById('imagen').setAttribute('src',"http://openweathermap.org/img/w/" + pronostico.weather[0].icon + ".png");
    document.getElementById('imagen').setAttribute('style', 'width:90px');
    
    document.getElementById('ciudad').textContent = pronostico.name + " " + pronostico.sys.country;
    let fecha = traerFecha();
    document.getElementById('act').innerText = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

}

function traerFecha(){

    let fecha = new Date();
    
    return fecha;

}