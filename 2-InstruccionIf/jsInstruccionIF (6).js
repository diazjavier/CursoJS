function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
console.log(typeof edad);
edad = parseInt(edad);
console.log(typeof edad);
if(isNaN(edad)){
    alert("Debe colocar un nùmero!");
}else
{
   if(edad >= 18){
       alert("Es adulto");
    }else if(edad < 13){
        alert("Es niño");

    }else{
        alert("Es adolescente");
    }
}
console.log(edad);

}//FIN DE LA FUNCIÓN