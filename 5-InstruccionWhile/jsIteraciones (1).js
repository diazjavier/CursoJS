function mostrar()
{
	alert('iteración while');

	var contador = 0;
	

	while(contador < 10){
		if(contador == 4){
			break;
		}

		contador++;
		console.log("Cont: "+contador);
	}

	console.log("Afuera cont: "+contador);

	while(contador < 10){
		contador++;
		
		if(contador % 2){
			continue; //corta la iteraciòn del bucle aca pero sigue ejecutándolo
		}

		console.log("Cont: "+contador);
	}


}//FIN DE LA FUNCIÓN