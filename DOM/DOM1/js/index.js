let div = document.getElementById("miDiv");
let hijos = div.childNodes; //Trae todos los hijos de div (elementos, etxtos, etc.)
let hijos2 = div.children; //Trae sólo los hijos que son del tipo Elemento
//El código JS pisa a las definiciones del css
hijos[3].style.backgroundColor = "red";

console.log(hijos);
console.log(hijos2);

let p1 = document.getElementById("p1");

console.log(p1.parentNode); //Trae al padre del elemento mencionado

let titulo = document.getElementsByTagName("h1")[0]; //Trae el primer elemento H1 del conjunto (array) de tìtulos

let hermanos = titulo.nextSibling; //Trae al hermano de H1
console.log(hermanos);

hermanos = titulo.nextSibling.nextSibling; //Trae al siguiente hermano de H1
console.log(hermanos);

let body = document.body; //body es una propiedad de document
let ultimoHijo = body.lastElementChild; //Trae el último elemento hijo
console.log(ultimoHijo);

let h2 = ultimoHijo.previousElementSibling; //Trae el hermano anterior
console.log(h2);

console.log(div.hasChildNodes()); //Pregunto si tiene nodos Hijos, devuelve true o false

let enlace = document.createElement("a");
let texto = document.createTextNode("Ir a Clarin");
enlace.appendChild(texto);
enlace.setAttribute("href", "http://clarin.com");
enlace.setAttribute("target", "_blank");
let divEnlace = document.getElementById("enlace");
divEnlace.appendChild(enlace);
