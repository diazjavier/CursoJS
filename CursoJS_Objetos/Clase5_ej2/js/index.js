var persona = {
    nombre : "Javier",
    apellido : "Díaz",
    edad : "50",
    domicilio:{
        pais:"Argentina",
        localidad:"Mar del Plata",
        direccion:{
            calle:"Av Colon",
            numero:2545
        }
    }
};

//Dos formas de acceder a las características de un objeto
console.log(persona.nombre);
console.log(persona['apellido']);
console.log(persona.domicilio.pais);
console.log(persona.domicilio.direccion.calle);
console.log(persona['apellido']);
console.log(persona['   ']);

for (prop in persona){
    console.log(prop + " : " + persona[prop]);

}

for (prop in persona.domicilio){
    console.log(prop + " : " + persona.domicilio[prop]);

}
for (prop in persona.domicilio.direccion){
    console.log(prop + " : " + persona.domicilio.direccion[prop]);

}
