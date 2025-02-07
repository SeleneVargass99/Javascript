// Practica de estudiantes y calificaciones 
// Nota = calificación del estudiante 

let Nota = 77;

if (Nota >=90 && Nota < 100 ){
    console.log("Excelente.")
}else if ( Nota >=75 && Nota < 89){
    console.log("Bien")
}else if (Nota >= 60 && Nota < 74){
    console.log("Suficiente")
}else if (Nota >= 0 && Nota < 60){
    console.log ("El estudiante no aprueba")
}else{
    console.log("La nota no se encuentra dentro de los valores.")
}