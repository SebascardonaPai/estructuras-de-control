let numero = Math.floor(math.random() * 50);
let adivinar = parseInt(prompt ("adivina el numero del 1 al 50"));
while ( adivinar != numero){
    adivinar = prompt ("no lo adivinaste, sigue intenando");
} 
alert ("si adivinaste el numero")