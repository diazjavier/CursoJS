function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes){
    case "Enero":
        alert("que comiences bien el año!!!");
        break;
    case "Marzo":
        alert("a clases!!!");
        break;
    case "Julio":
        alert("se vienen las vacaciones!!");
        break;
    case "Diciembre":
        alert("Felices fiestas!!!");
        break;
    default:
        alert("Sigue, sigue");
                             
}
}//FIN DE LA FUNCIÓN