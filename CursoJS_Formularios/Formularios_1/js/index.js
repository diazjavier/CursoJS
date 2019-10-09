let listaPersonas = [];
//let listaPersonas = new Array(); //Esto es lo mismo que --> let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, nada, maneja, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.pais = pais;

    Persona.prototype.Saludar = function(){
        console.log("hola " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Soy " + genero + ". Maneja: " + maneja + ". Nada: " + nada + ". Soy de: " + pais)
    }
}

window.addEventListener('load', function(){
    //Tres formas diferentes de hacer referencia a un Formulario
    var frm1 = document.getElementById('frmPersona');
    //var frm2 = document.getElementsByTagName('form')[0];
    //var frm3 = document.forms[0];

    //Capturo el evento Submit del formulario de referencia
    frm1.addEventListener('submit', manejarSubmit);

});

//addEventListener pasa a la función un evento que capturo con el parámetro "e"
function manejarSubmit(e){
    e.preventDefault(); //Esto evita que se cambie de página
    //alert("Manejando Submit");
    let frm = e.target;
    //var nuevaPersona = new Persona(ewerfef);
    //let P1 = new Persona("Juan", "Perez", 53, "Masculino", true, false, "Brasil");
    
        
    
    let P1 = creaPersona();
    listaPersonas.push(P1); //Agrega un elemento al final de array
    console.log(listaPersonas);
    P1.Saludar();
    cargarFormulario2(P1);

}

function creaPersona(){
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let edad = parseInt(document.getElementById("txtEdad").value);
    let genero;
    if (document.getElementById("rdoMasculino").checked){
        genero = "masculino";
    }else{
        genero = "femenino";
    }
    let nada = document.getElementById("chkNada").checked;
    let maneja = document.getElementById("chkManeja").checked;
    let pais = document.getElementById("selPais").value;
    
    let per = new Persona(nombre, apellido, edad, genero, nada, maneja, pais);
    return per;
}

function cargarFormulario2(persona){
    document.getElementById("txtNombre2").value = persona.nombre;
    document.getElementById("txtApellido2").value = persona.apellido;
    document.getElementById("txtEdad2").value = persona.edad;
    if (persona.genero == "masculino"){
        document.getElementById("rdoMasculino2").checked = true;
    }else{
        document.getElementById("rdoFemenino2").checked = true;
    }
    document.getElementById("chkNada2").checked = persona.nada;
    document.getElementById("chkManeja2").checked = persona.maneja;
    document.getElementById("selPais2").value = persona.pais;
}




function limpiarFormulario(){
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtEdad").value = "";
    document.getElementById("rdoMasculino").checked = true;
    document.getElementById("rdoFemenino").checked = false;
    document.getElementById("chkNada").checked = false;
    document.getElementById("chkManeja").checked = false;
    document.getElementById("selPais").value = "ar";

    document.getElementById("txtNombre2").value = "";
    document.getElementById("txtApellido2").value = "";
    document.getElementById("txtEdad2").value = "";
    document.getElementById("rdoMasculino2").checked = true;
    document.getElementById("rdoFemenino2").checked = false;
    document.getElementById("chkNada2").checked = false;
    document.getElementById("chkManeja2").checked = false;
    document.getElementById("selPais2").value = "ar";
}

//document.addEventListener("limpiador", limpiarFormulario());

