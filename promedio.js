function sumaNotas(notas) {//funcion para sumar notas
    return notas.reduce((acumulado, nota) => acumulado + nota, 0);//se suma las notas
}

function promedioNotas(notas) {//funcion para calcular el promedio
    const suma = sumaNotas(notas);//se suma las notas
    return suma / notas.length;//se calcula el promedio
}
const notas = [6, 8, 9, 2, 5, 10,5,7,2,9,2];//se crea la lista de notas

const promedio = promedioNotas(notas);//se almacena el prodemio de notas

//const redondeado = Math.round(numero * 100) / 100;  // Redondea a 2 decimales
const promedio_redondeado1 = promedio.toFixed(1);//se redondea a un decimal

console.log("Promedio:", promedio_redondeado1);  // Promedio: 7.5
