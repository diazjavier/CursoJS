function mostrar()
{

	var contador=0;
	var acumulador=0;
	var aux;

while(contador < 5){
	do{
		aux = prompt('Ingrese un número:');
		aux = parseInt(aux);
			if(isNaN(aux)){
				alert('NUMEROOOO');
			}
	}while (isNaN(aux));

	acumulador = acumulador + aux;
	contador++;
	console.log(contador + " " + acumulador);
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
