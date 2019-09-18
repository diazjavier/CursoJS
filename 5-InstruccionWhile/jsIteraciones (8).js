function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	var respuesta='si';


	while(respuesta == 'si'){
		contador++;
		do{
			aux = prompt('Ingrese un número:');
			aux = parseInt(aux);
				if(isNaN(aux)){
					alert('NUMEROOOO');
				}
		}while (isNaN(aux));
		if(aux < 0){
			negativo = negativo * aux;
		}else{
			positivo = positivo + aux;

		}

		console.log(contador + " " + positivo  + " " + negativo + " " + respuesta);
		respuesta = prompt('Desa continuar?');


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
