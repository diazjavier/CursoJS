function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaNegativos=0;
	var cantNegativos=0;
	var sumaPositivos=0;
	var cantPositivos=0;
	var cantCeros=0;
	var cantPares=0;

	var respuesta="si";

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
			cantNegativos++;
			sumaNegativos += aux;
		}else if(aux>0){
			cantPositivos++;
			sumaPositivos += aux;
		}else{
			cantCeros++;
		}

		if(!aux%2){
			cantPares++;
		}

		respuesta = prompt('Desa continuar?');
	}

	console.log("Suma de Positivos: " + sumaPositivos + '\n' +
				"Cantidad de Positivos: " + cantPositivos + '\n' +
				"Promedio de Positivos: " + (sumaPositivos/cantPositivos) + '\n' +
				"Suma de Negativos: " + sumaNegativos + '\n' +
				"Cantidad de Negativos: " + cantNegativos + '\n' +
				"Promedio de Negativos: " + (sumaNegativos/cantNegativos) + '\n' +
				"Diferencia de Positivos y Negativos: " + (cantPositivos-cantNegativos) + '\n' +
				"Cantidad de Ceros: " + cantCeros + '\n' +
				"Cantidad de Pares: " + cantPares);



}//FIN DE LA FUNCIÓN