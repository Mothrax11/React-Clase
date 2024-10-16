const apellidos =["López", "González"];
var nombre= "Raúl";

function pepe(variable1, variable2, variable3) {
    
    console.log("¡Hola, mundo desde Node.js!");
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
}

pepe(nombre, apellidos[0], apellidos[1]);
pepe(nombre, null, null);

