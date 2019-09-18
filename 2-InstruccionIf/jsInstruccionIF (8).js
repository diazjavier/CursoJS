function mostrar()
{
//tomo la edad
var edad;
var estado;
edad = parseInt(document.getElementById('edad').value);
estado = document.getElementById('estadoCivil').value;

console.log(edad + " " + estado);

if(isNaN(edad)){

	alert('Por favor ingrese un número');
}else if(edad > 18 && estado == "Soltero"){
	alert('Es soltero y no es menor.');

}




}//FIN DE LA FUNCIÓN
