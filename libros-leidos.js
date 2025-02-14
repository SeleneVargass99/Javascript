// Declaraciòn arreglo vacio 
let librosLeidos = [];

// Declaración de función agregar libro 

function agregarLibro(tituloLibro){
    librosLeidos.push(tituloLibro); // Agregar un elemento al arreglo
}

agregarLibro("El principito");
agregarLibro("Las mujeres que amaban demasiado");
agregarLibro("Los 7 esposos de Evelyn Hugo");

console.log(librosLeidos); // Imprimimos el arreglo 

// Mostrar los libros leidos 

function mostrarLibrosLeidos(){
    for (let i = 0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

// Tenemos que llamar a la funcion 

mostrarLibrosLeidos();

console.log("--------------")
agregarLibro("Cien años de soledad");
agregarLibro("La chica del tren");
agregarLibro ("Java Script para principiantes");

mostrarLibrosLeidos();
