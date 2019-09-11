function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
console.log(typeof edad);
edad = parseInt(edad);
console.log(typeof edad);
   if(edad >= 18){
       alert("Es mayor");
   }


}//FIN DE LA FUNCIÓN