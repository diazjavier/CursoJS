function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
console.log(typeof edad);
edad = parseInt(edad);
console.log(typeof edad);
   if(edad >= 13 && edad <=17){
       alert("Es adolescente");
   }else{
    alert("NO es adolescente");

    }

    if(!(edad < 13 || edad >17 || isNaN(edad))){
        alert("Es adolescente");
    }else{
     alert("NO es adolescente");
 
     }

console.log(edad);


}//FIN DE LA FUNCIÓN