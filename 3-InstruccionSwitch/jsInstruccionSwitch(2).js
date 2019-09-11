function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mes);
switch(mes){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio");
        break;
    case "Septiembre":
    case "Octubre":
    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;
    default:
        alert("Es Noviembre");
                             
}



}//FIN DE LA FUNCIÓN