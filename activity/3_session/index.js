//ejercicio 1
let getPersonProperties = function (person) {
    return [person.name, person.age, person.profession];
};
// Ejemplo de uso
let person = {
    name: 'Lucas',
    age: 28,
    profession: 'Full Stack',
};
let properties = getPersonProperties(person);
console.log(properties); // Output: ["Lucas", 28, "Full Stack"]

// ejercicio 2
function sumOrConcatenate(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else if (typeof param1 === 'string' && typeof param2 === 'string') {
        return param1 + '-' + param2;
    }
    else {
        return param1 + ':' + param2;
    }
}
console.log(sumOrConcatenate(4, 3)); 
console.log(sumOrConcatenate(4, "hello")); 
console.log(sumOrConcatenate("hello", "world")); 


//ejercicio 3
function isCar(vehicle) {
    return 'pressPedal' in vehicle;
}
function startVehicle(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
}

// ejericio 4

function removeFirstEntry(array) {
    return array.slice(1);
}
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> dar� un error
console.log(newStrArray); // Output: ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // Output: [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // Output: ['I', 'have', 3, 'tasks'];
