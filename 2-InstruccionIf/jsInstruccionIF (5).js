function mostrar()
{
//tomo la edad
  var edad;
  edad = parseInt(document.getElementById("edad").value);

  if(isNaN(edad)){

    alert("Ingrese un número por favor");

  }else if(edad < 13 || edad > 17){

    alert("NO es adolescente");

  }



}//FIN DE LA FUNCIÓN
