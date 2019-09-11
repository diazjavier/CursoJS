function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);
var estado = document.getElementById("estadoCivil").value;	

if (edad < 18 && estado != "Soltero"){
    alert("Es muy chico para no ser soltero!");
}

}//FIN DE LA FUNCIÓN