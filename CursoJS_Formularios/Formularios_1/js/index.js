window.addEventListener('load', function(){
    //Tres formas diferentes de hacer referencia a un Formulario
    var frm1 = document.getElementById('frmPersona');
    //var frm2 = document.getElementsByTagName('form')[0];
    //var frm3 = document.forms[0];

    frm1.addEventListener('submit', manejarSubmit);

});

//addEventListener pasa a la función un evento que capturo con el parámetro "e"
function manejarSubmit(e){
    e.preventDefault(); //Esto evita que se cambie de página
    //alert("Manejando Submit");
    var frm = e.target;
    var nuevaPersona = new Persona(ewerfef);


}