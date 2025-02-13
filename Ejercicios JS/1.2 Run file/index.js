// //Ejercicio 1
// // Este es un comentario en una sola línea

// /*
//   Este es un comentario multilínea.
//   Puedes escribir varias líneas aquí.
//   Todo lo que esté dentro de este bloque será ignorado por el intérprete de JavaScript.
// */

// // Ejemplo de código con comentarios
// let nombre = "Guillermo"; // Asignamos el valor "Guillermo" a la variable nombre

// /*
//   A continuación, vamos a imprimir el valor de la variable nombre
//   en la consola.
// */
// console.log(nombre); // Esto imprimirá "Guillermo" en la consola


// //ejercicio 2 Declarar diferentes tipos de variables y mostrar sus valores por consola. 
// //Declaración de una variable con let
// let nombre = "Guillermo Cima"; // Una variable que puede ser modificada
// console.log("Mi nombre es:", nombre);

// // Declaración de una variable con const
// const edad = 23; // Una variable cuyo valor no puede ser modificado
// console.log("Mi edad es:", edad);

// //ejercicio 3 Crear un array con al menos cinco elementos de diferentes tipos.
// // Crear un array con elementos de diferentes tipos
// const miArray = [
//     42,                         // Número
//     "Hola, mundo!",              // Cadena de texto
//     true,                        // Booleano
//     { nombre: "Juan", edad: 30 }, // Objeto
//     [1, 2, 3],                   // Array
//     function() {                 // Función
//         console.log("es una función dentro de un array!");
//     }
// ];

// // Mostrar los elementos del array en la consola
// console.log("Elemento 1 (Número):", miArray[0]);
// console.log("Elemento 2 (Cadena):", miArray[1]);
// console.log("Elemento 3 (Booleano):", miArray[2]);
// console.log("Elemento 4 (Objeto):", miArray[3]);
// console.log("Elemento 5 (Array):", miArray[4]);

// // Llamar a la función dentro del array
// console.log("Elemento 6 (Función):");
// miArray[5]();

// //ejercicio 4 Escribe una función que tome dos números y aplique una operación
// //Función que toma dos números y aplica una operación (multiplicacion)
// function aplicarOperacion(num1, num2) {
//     // Realiza la operación (multiplicacion)
//     const resultado = num1 * num2;

//     // Retorna el resultado
//     return resultado;
// }

// // Ejemplo de uso de la función
// const numero1 = 5;
// const numero2 = 10;

// // Llamada a la función y almacenamiento del resultado
// const resultadoOperacion = aplicarOperacion(numero1, numero2);

// // Mostrar el resultado en la consola
// console.log(`El resultado de la operación es: ${resultadoOperacion}`);

// //ejercicio 5 Crea una función flecha que reciba un string y lo imprima en mayúsculas
// const imprimirEnMayusculas = (texto) => {
//    console.log(texto.toUpperCase());
// };

// // Ejemplo de uso
// imprimirEnMayusculas("guillermo"); // Imprime "GUILLERMO"



// // Ejercicio 6 Implementa un bucle que imprima los números del 1 al 10.

// // Bucle for que imprime los números del 1 al 10
//  for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // 7 Crea un objeto que represente un objeto del mundo real con sus respectivas propiedades
// // Objeto que representa una bicicleta eléctrica
// const bicicleta = {
//     marca: "EcoRide", // Propiedad: marca de la bicicleta
//     bateria: 50, // Propiedad: nivel de batería (en porcentaje)
//     encendida: false, // Propiedad: estado de la bicicleta (encendida/apagada)

//     // Método para encender la bicicleta
//     encender() {
//         if (this.bateria > 0) {
//             this.encendida = true;
//             console.log("Bicicleta encendida.");
//         } else {
//             console.log("Batería agotada. No se puede encender.");
//         }
//     },

//     // Método para apagar la bicicleta
//     apagar() {
//         this.encendida = false;
//         console.log("Bicicleta apagada.");
//     },

//     // Método para mostrar información básica
//     info() {
//         console.log(`Marca: ${this.marca}, Batería: ${this.bateria}%, Estado: ${this.encendida ? "Encendida" : "Apagada"}`);
//     }
// };

// // Usar el objeto bicicleta
// bicicleta.info(); // Mostrar información inicial
// bicicleta.encender(); // Encender la bicicleta
// bicicleta.info(); // Mostrar información actualizada
// bicicleta.apagar(); // Apagar la bicicleta
// bicicleta.info(); // Mostrar información final

// // 8 Agrega un método al objeto creado anteriormente e imprima una descripción del mismo
// // Objeto que representa una bicicleta eléctrica
// const bicicleta = {
//     marca: "EcoRide", // Propiedad: marca de la bicicleta
//     bateria: 50, // Propiedad: nivel de batería (en porcentaje)
//     encendida: false, // Propiedad: estado de la bicicleta (encendida/apagada)

//     // Método para encender la bicicleta
//     encender() {
//         if (this.bateria > 0) {
//             this.encendida = true;
//             console.log("Bicicleta encendida.");
//         } else {
//             console.log("Batería agotada. No se puede encender.");
//         }
//     },

//     // Método para apagar la bicicleta
//     apagar() {
//         this.encendida = false;
//         console.log("Bicicleta apagada.");
//     },

//     // Método para mostrar información básica
//     info() {
//         console.log(`Marca: ${this.marca}, Batería: ${this.bateria}%, Estado: ${this.encendida ? "Encendida" : "Apagada"}`);
//     },

//     // Método para imprimir una descripción detallada
//     descripcion() {
//         console.log(`Esta es una bicicleta eléctrica de la marca ${this.marca}.`);
//         console.log(`Actualmente tiene un nivel de batería del ${this.bateria}%.`);
//         console.log(`La bicicleta está ${this.encendida ? "encendida" : "apagada"}.`);
//     }
// };

// // Usar el objeto bicicleta
// bicicleta.info(); // Mostrar información inicial
// bicicleta.descripcion(); // Mostrar descripción detallada
// bicicleta.encender(); // Encender la bicicleta
// bicicleta.descripcion(); // Mostrar descripción actualizada
// bicicleta.apagar(); // Apagar la bicicleta
// bicicleta.descripcion(); // Mostrar descripción final

//9 Crea un módulo que contenga funciones matemáticas básicas (suma, resta, etc.) y utilízalo en otro archivo.


// //ejercicio 10 Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resultado con un callback
// function operacionAsincronica(datos, callback) {
//     console.log("Procesando operación asincrónica...");
    
//     setTimeout(() => {
//         // Simulamos el procesamiento de datos
//         const resultado = `Resultado procesado: ${datos}`;

//         // Llamamos al callback con el resultado
//        callback(null, resultado); // null indica que no hubo error
//     }, 2000); // Simulación de 2 segundos de retraso
// }

//  //Uso de la función con un callback
// operacionAsincronica("Datos de prueba", (error, resultado) => {
//     if (error) {
//         console.error("Error:", error);
//     } else {
//       console.log("Operación completada:", resultado);
//     }
// });

//ejercicio 11 Escribe un bloque de código que intente convertir una cadena a un número y que maneje cualquier error que pueda ocurrir.
function convertirANumero(cadena) {
    try {
        // Intenta convertir la cadena a un número
        let numero = Number(cadena);

        // Verifica si el resultado es un número válido
        if (isNaN(numero)) {
            throw new Error("La cadena no es un número válido.");
        }

        console.log(`La conversión fue exitosa: ${numero}`);
    } catch (error) {
        // Maneja cualquier error que ocurra
        console.log(`Error: ${error.message}`);
    }
}

// Ejemplo de uso
convertirANumero("123");         // Conversión exitosa
convertirANumero("123.45");      // Conversión exitosa
convertirANumero("abc");         // Error
convertirANumero("123abc");      // Error
convertirANumero("");            // Error (cadena vacía)