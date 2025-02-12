let frutas = ['guayaba','piña','pepino','sandia','melon','durazno','manzana']
console.log(frutas);

let contador = [];
for(let i = 0; i <frutas.length; i++){
    let fruta= frutas[i];
    if(contador[frutas]){
        contador [fruta]++;
    }else{
        contador[fruta] = 1;
    }
}

console.log(contador);
