function mostrar()
{
//tomo la edad  
 var edad;
 edad = document.getElementById("edad").value;
 console.log(typeof edad);
 edad = parseInt(edad);
 console.log(typeof edad);
    if(edad === 15){
        // tres "=" compara el valor incluyendo el tipo de dato
        alert("Niña bonita");
    }
}//FIN DE LA FUNCIÓN