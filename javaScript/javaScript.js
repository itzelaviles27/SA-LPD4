/**Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, 
debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar el dato. */

let numero = prompt('Ingrese el Número');
numero = parseFloat(numero);

function fibonacci(numero) {
        if (numero <= 1) {
            return numero;
        } else {
            return fibonacci(numero - 1) + fibonacci(numero - 2);
        }
    
}

function serieFib(numero) {
    if (isNaN(numero)) {
        console.log(`Ingresa un número`);
    } else{
    for (let i = 0; i < numero; i++) {
        console.log(fibonacci(i));
    }
}
}
serieFib(numero);

