let personas=[];

let verduras = ['Lechuga','Tomate','Cebolla','Jitomate','Papa','Pimiento']; // Arreglo con dtaos
console.log(verduras[0]);
console.log(verduras[1]);
console.log(verduras[3]);

console.log(verduras.length);

console.log("Imprimiendo verduras con ciclo for")

for(let indice = 0; indice <verduras.length; indice++){
    console.log(verduras[Indice]);
}

    console.log ("Metodos de arreglos"); 

personas.push('Ana'); // Agrega un elemento al final del arreglo 
personas.push('Diego');
personas.push('Liset');
personas.push('Marcela');

console.log(personas);

personas.pop(); //Elimina el último elemento del arreglo 
console.log(personas);

personas.unshift ('Alex'); // Agregando un elemento 
pweaonA.unshift('Yolanda');
console.log(personas);

personas.shift();