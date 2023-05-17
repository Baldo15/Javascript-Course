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
//       alert('Usuario o contrase�a incorrectos');
//     }
//   }
// }

// let login = new Login('admin', 'passwd');
// login.login(); // Alerta: Usuario logueado

// let logbad = new Login('baldo', '123');
// logbad.login(); // Alerta: Usuario o contrase�a incorrectos


// Ejercicio 5

// Ejercicio 6
// Funci�n para el clickListener del bot�n loginSuccess
function handleLoginSuccess() {
    // Crear objeto login correcto
    let login = {
        username: "admin",
        password: "passwd"
    };

    // Llamar a la funci�n para que falle y se devuelve el resultado de la promesa
    loginWitUsername(login.username, login.password).then(function (value) {
        console.log("Promesa cumplida:", value);
    }).catch(function (error) {
        console.log("Promesa rechazada:", error);
    });
}

// Funci�n para el clickListener del bot�n loginFailure
function handleLoginFailure() {
    // Crear objeto login con par�metros incorrectos
    let login = {
        username: "baldo",
        password: "123456"
    };

    // Llamar a la funci�n para que falle y se devuelve el resultado de la promesa
    loginWitUsername(login.username, login.password).then(function (value) {
        console.log("Promesa cumplida:", value);
    }).catch(function (error) {
        console.log("Promesa rechazada:", error);
    });
}

// Obtener los elementos de los botones por su ID
let successButton = document.getElementById("loginSuccess");
let failureButton = document.getElementById("loginFailure");
let SuccessAsyncButton = document.getElementById("loginSuccessAsync");
let FailureAsyncButton = document.getElementById("loginFailureAsync");

// A�adir clickListeners a los botones
successButton.addEventListener("click", handleLoginSuccess);
failureButton.addEventListener("click", handleLoginFailure);


// Crear el clickListener as�ncrono para el bot�n loginSuccessAsync
SuccessAsyncButton.addEventListener("click", async function() {
    try {
        // Llamar a la funci�n asincr�nica loginWithUsername para el resultado correcto
        var result = await loginWitUsername("admin", "passwd");
        console.log(result); // Resultado exitoso
    } catch (error) {
        console.log(error); // Manejo de errores
    }
});

FailureAsyncButton.addEventListener("click", async function() {
    try {
        // Llamar a la funci�n asincr�nica loginWithUsername con par�metros incorrectos
        var result = await loginWitUsername("baldo", "123456");
        console.log(result); // Resultado exitoso
    } catch (error) {
        console.log(error); // Manejo de errores
    }
});

FailureAsyncButton.addEventListener("click", handleLoginFailure);

let loginWitUsername = (username, password) => {

    return new Promise(function (resolve, rejected) {
        setTimeout(() => {

            if (username === "admin" && password === "passwd") {
                resolve("User logged in");
            } else {
                rejected("Error: invalid username or password");
            }
        }, 1);
    });
};
