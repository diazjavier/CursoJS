function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var maximo = 10;
	var minimo = 1;

	var nota = Math.floor(Math.random()*((maximo+1)-minimo)+minimo);


if(nota > 8){

	alert('Nota = ' + nota + ' EXCELENTE');

}else if(nota > 3){

	alert('Nota = ' + nota + ' APROBÓ');

}else{

	alert('Nota = ' + nota + ' Vamos, la proxima se puede');

}


}//FIN DE LA FUNCIÓN
