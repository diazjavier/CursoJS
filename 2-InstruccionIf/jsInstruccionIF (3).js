function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
console.log(typeof edad);
edad = parseInt(edad);
console.log(typeof edad);
   if(edad > 17){
       alert("Es mayor");
   }else{
    alert("Es menor");

    }
alert (edad);
}//FIN DE LA FUNCIÓN