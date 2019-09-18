function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var aux;

while(respuesta == 'si'){
	contador++;
	do{
		aux = prompt('Ingrese un número:');
		aux = parseInt(aux);
			if(isNaN(aux)){
				alert('NUMEROOOO');
			}
	}while (isNaN(aux));
	acumulador = acumulador + aux;
	respuesta = prompt('Desa continuar?');
	console.log(contador + " " + acumulador + " " + respuesta);

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
