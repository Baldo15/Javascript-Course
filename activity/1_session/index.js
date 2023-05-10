// // Ejercicio 1
// // Importamos el archivo aboutme.js
// const presentacion = require('./aboutme');

// // Ejercicio 1
// console.log("Ejercicio 1");

// // Ejercicio 2

// // Ejercicio 3

// // Ejercicio 4
// console.log("los numeros divisibles por 7 menores que 100 son:")
// for(let i = 1; i <= 100; i++) {
//     if(i % 7 === 0) {
//       console.log(i);
//     }
//   }
// // Ejercicio 5

// Ejercicio 6
// se crea el objeto
const Formatter = function(prefix) {
    this.prefix = prefix;
  };
  
  Formatter.prototype.append = function(message) {
    console.log(this.prefix + message);
  };
  
  // se añade el metodo
  Formatter.prototype.toLowerString = function(message) {
    console.log(message.toLowerCase());
  };
  

  const formatter = new Formatter("Hello ");
  
  // se llaman los metodos y se le asignan los mensajes
  formatter.append("World"); 
  formatter.toLowerString("I'm Lucas"); 
  