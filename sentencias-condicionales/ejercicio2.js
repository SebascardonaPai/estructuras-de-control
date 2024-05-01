function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

console.log("Bienvenido a la calculadora básica.");
console.log("Operaciones disponibles: \n1. Suma \n2. Resta \n3. Multiplicación \n4. División");

let operacion = prompt("Por favor, seleccione la operación (1suma/2resta/3multiplicacion/4division): ");

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

if (operacion === '1') {
    console.log("El resultado de la suma es:", suma(num1, num2));
} else if (operacion === '2') {
    console.log("El resultado de la resta es:", resta(num1, num2));
} else if (operacion === '3') {
    console.log("El resultado de la multiplicación es:", multiplicacion(num1, num2));
} else if (operacion === '4') {
    console.log("El resultado de la división es:", division(num1, num2));
} else {
    console.log("Operación no válida. Por favor, seleccione una operación válida (1/2/3/4).");
}