//Cuando carga la ventana del navegador dispara la función inicializarManejadores
window.addEventListener('load', inicializarManejadores);

function inicializarManejadores(){
    const boton = document.getElementById('btnCalcular');
    boton.addEventListener('click', calcularSuperficie);

}

function calcularSuperficie(){
    let radio = document.getElementById('txtRadio').value;
    let superficie = Math.PI * Math.pow(radio, 2);
    //Es igual que hacer:
    //let superficie = Math.PI * radio * radio;  
    console.log(superficie);
    document.getElementById('txtSuperficie').value = superficie.toFixed(2);
}

//Tres formas de declarar una fucnión:

//Tradicional: 
//function  nombreDeLaFuncion(){}

//Anónima asignada a una variable:
//let nombreDeLaFuncion = function(){}

//Anónima asignada a una variable con flecha gorda:
//let nombreDeLaFuncion = ()=>{}