// Ejercicio 1
// const getProperties = (obj) => {
//   return Object.keys(obj);
// };

// const person = {
//   name: "Lucas",
//   age: 27,
//   profession: "Developer",
// };

// console.log(getProperties(person)); // ["name", "age", "profession"]

// Ejercicio 2

// Ejercicio 3
// class InvertirCadena {
//   constructor() {
//     this.cadenaInvertir = '';
//   }

//   invertir() {
//     if (this.cadenaInvertir === '') {
//       throw new Error('La cadena esta vacia');
//     }

//     const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
//     console.log(cadenaInvertida);
//   }
// }

// // Instancia de la clase InvertirCadena
// const invertirCadena = new InvertirCadena();
// invertirCadena.cadenaInvertir = 'Hola mundo';
// invertirCadena.invertir();

// // codigo con validacion para que no se rompa el codigo
// class InvertirCadena {
//   constructor() {
//     this.cadenaInvertir = '';
//   }

//   invertir() {
//     if (this.cadenaInvertir === '') {
//       console.log('La cadena esta vacia');
//       return;
//     }

//     const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
//     console.log(cadenaInvertida);
//   }
// }

// // Instancia de la clase InvertirCadena
// const invertirCadena = new InvertirCadena();
// invertirCadena.invertir();


// Ejercicio 4

// class Login {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   login() {
//     if (this.username === 'admin' && this.password === 'passwd') {
//       alert('Usuario logueado');
//     } else {
//       alert('Usuario o contraseña incorrectos');
//     }
//   }
// }

// let login = new Login('admin', 'passwd');
// login.login(); // Alerta: Usuario logueado

// let logbad = new Login('baldo', '123');
// logbad.login(); // Alerta: Usuario o contraseña incorrectos


// Ejercicio 5

// Ejercicio 6

// let loginWitUsername = (username, password) => {
//     return new Promise(function (resolve, rejected) {
//       setTimeout(() => {
//         if (username === "admin" && password === "passwd") {
//           resolve("User logged in");
//         } else {
//           rejected("Error: invalid username or password");
//         }
//       }, 200);
//     });
// };
