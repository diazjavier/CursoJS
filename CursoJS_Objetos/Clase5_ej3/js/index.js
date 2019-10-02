function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //Ahora declaro un método como una función:
    this.saludar = function(){
        console.log("Hola soy " + this. nombre + " " + this.apellido)
    }

}

function chau(){
    console.log("Chau " + this.nombre + " " + this.apellido);
}

//Agrego una función al prototipo (Clase)
Persona.prototype.despedirse = chau;


var x = new Persona("Javier", "Díaz", "52");
var y = new Persona("Pedro", "López", "32");

console.log(x, y);

x.apellido = "Suarez";
x.genero = "M";

console.log(x, y);

Persona.prototype.altura = null;
console.log(x, y);

x.despedirse();
y.despedirse();
