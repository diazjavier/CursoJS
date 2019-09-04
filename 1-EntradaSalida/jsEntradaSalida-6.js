/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var resultado;
    var resultado2;

    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    //numero1 = document.getElementById("numeroUno").value;
    //numero2 = document.getElementById("numeroDos").value;
    resultado = numero1 - numero2;
    resultado2 = numero1 + numero2;
    alert("La suma es " + resultado + " y " + resultado2);
}

