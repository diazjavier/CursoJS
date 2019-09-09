/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
	suma = numeroUno + numeroDos;

	alert("La suma es " + suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
	resta = numeroUno - numeroDos;

	alert("La resta es " + resta);

}

function multiplicar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;

	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
	multiplicacion = numeroUno * numeroDos;

	alert("La multiplicacion es " + multiplicacion);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;

	numeroUno = parseInt(document.getElementById("numeroUno").value);
	numeroDos = parseInt(document.getElementById("numeroDos").value);
	division = numeroUno / numeroDos;
	alert("La division es " + division);


}
