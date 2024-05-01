let sumaEdades = 0;

for (let i = 1; i <= 5; i++) {
    let edad = parseInt(prompt("Ingrese la edad de la persona " + i + ": "));
    sumaEdades += edad;
}

let promedioEdades = sumaEdades / 5;

console.log("La edad promedio es:", promedioEdades);

if (promedioEdades >= 18) {
    console.log("La edad promedio es mayor o igual a la mayoría de edad (18 años).");
} else {
    console.log("La edad promedio es menor que la mayoría de edad (18 años).");
}