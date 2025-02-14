// Funciones

function sumar(numero1, numero2){ // Palabra reservada function + nombre de la función + parámetros
    let total = numero1 + numero2;
    return total;
}

//Llamada a mi función 
let resultado = sumar(10,10);
// return 

console.log(resultado);
console.log(sumar(12,20));

sumar(2,3);

function Saludar (nombre){
    console.log("Hola, bienvenida/o" + nombre); // Concatenar 
}

Saludar("Carolina");
Saludar("Monserrat");

console.log(sumar(2,3));

function restar(a,b){
    let total = a -b;
   // console.log(total); // Con console.log SOLO se imprime en consola 
}
// No se guarda el resulatdo en una variable 

restar(13,2);

//console.log(total);

function casita(){
    let nombre = "Ana";
    let apellido = "Villanueva";
    console.log ("Esta es una casita");
}

casita ();
//console.log(nombre); // No se puede acceder por que esta dentro de una function 
// Scope de bloque 

let nombre = "Vanessa";
let edad =23;
let ciudad = "Ciudad de mexico";

console.log("ella se llama " + nombre + " tiene " + edad + "años y vive en " + ciudad );

console.log (`Ella se llama $(nombre) y tiene $(edad) años y vive en $(ciudad)`) // Ctrl + Alt + }

// Actualización de ES& (2015)
let usuario = prompt("Cual es tu nombre?");
let gatos = prompt("¿Cuántos gatos tienes?");
let perros = prompt("Cuántos perros tienes?");

// vemos los datos en consola 
console.log(`$ {usuario} tiene ${gatos} y ${perros}`);

// vemos los datos en pop up 
alert (`${usuario} tiene ${gatos} gatos y ${perros} perro`)