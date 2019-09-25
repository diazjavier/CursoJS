/*

//alert("hola afuera");

//En JS una fucnión puede tener más de un parámetro 
//pero al invocarla se pueden pasar menos parámetros de los definidos y fucniona igual 

function saludar(mensaje, otraCosa){
    alert(mensaje);
    alert(otraCosa);
    
}

let x = saludar;

saludar("Hi");
x("Chau");

*/

let cad = "  Escritorios   ";

console.log(cad.length);
console.log(cad.toUpperCase());
console.log(cad.trim());
console.log(cad.indexOf("c"));
console.log(cad.includes("it"));

function modificarX(x){
    x = x * 20;
    console.log("Aca adentro x vale " + x);

}

let x = 20;
console.log("Anes de la función x vale " + x);
modificarX(x);
//La variable x dentro de la función es distinta que la variable x con scope global
//La variable x global no puede ser modificada dentro de la función porque pasa como valor (no como referencia)

console.log("Después de la función x vale " + x);


//Un tipo de dato no primitivo siempre pasa como referencia a una función

let vec = ["uno", "dos", "tres"];
let vec2 = vec.slice();

function modificoVector(vector){
    vector.push("Cuatro");
    

}

modificoVector(vec);
console.log("El Vector original cambio a " + vec);
console.log("El Vector copiado con slice es " + vec2);

let perro