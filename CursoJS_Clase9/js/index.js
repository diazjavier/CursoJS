window.addEventListener("load", ()=>{
    let selPaises =document.getElementById("selPaises");
    let selCiudades =document.getElementById("selCiudades");

    selPaises.addEventListener("change", () => cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value)));

    cargarSelect(selPaises, obtenerPaises(datos));
    cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));
});





function cargarSelect(select, arr){
    let opcion;
    limpiarSelect(select);
    
    arr.forEach(element => {
       opcion = document.createElement('option'); 
       let texto = document.createTextNode(element);
       opcion.appendChild(texto);
       opcion.setAttribute('value', element);

       select.appendChild(opcion);
    });
    
    

}

function obtenerPaises(arr){
    return arr.map(elemento=>elemento.pais)
    .unique()
    .sort();
}
//Es lo mismo que:
/*
let obtenerPaises = arr => 
    arr.map(elemento=>elemento.pais)
    .unique()
    .sort();
*/

function obtenerCiudades(arr, pais){
    let ciudades = arr.filter(elemento => elemento.pais === pais)
    .map(elemento => elemento.ciudad)
    .unique()
    .sort();

    return ciudades;
}

//Creo una nueva función para todos los Arrays que la invento yo llamada "unique()"
Array.prototype.unique = function(){
    //El objeto Set toma sólo los objetos distintos
    return [... new Set(this)];
}

function limpiarSelect (select){
    while(select.hasChildNodes()){
        select.removeChild(select.firstElementChild);
    }
}