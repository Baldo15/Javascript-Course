//ejercicio 1
interface Person {
  name: string;
  age: number;
  profession: string;
}

const getPersonProperties = (person: Person): (string | number)[] => {
  return [person.name, person.age, person.profession];
};

// Ejemplo de uso
const person: Person = {
  name: 'Lucas',
  age: 28,
  profession: 'Full Stack',
};

const properties = getPersonProperties(person);
console.log(properties); 

console.log(sumOrConcatenate(4, 3)); // Output: 7
console.log(sumOrConcatenate(4, "hello")); // Output: 4:hello
console.log(sumOrConcatenate("hello", "world")); // Output: hello-world
 
// ejercicio 2
function sumOrConcatenate(param1: number | string, param2: number | string): number | string {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else if (typeof param1 === 'string' && typeof param2 === 'string') {
    return param1 + '-' + param2;
  } else {
    return param1 + ':' + param2;
  }
}

console.log(sumOrConcatenate(4, 3)); // Output: 7
console.log(sumOrConcatenate(4, "hello")); // Output: 4:hello
console.log(sumOrConcatenate("hello", "world")); // Output: hello-world


//ejercicio 3
interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}

interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return 'pressPedal' in vehicle;
}

function startVehicle(vehicle: Car | Motorcycle) {
  vehicle.turnOnEngine();

  if (isCar(vehicle)) {
    vehicle.pressPedal();
  } else {
    vehicle.openThrottle();
  }
}

// ejericio 4
function removeFirstEntry<T>(array: T[]): T[] {
  return array.slice(1);
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> dará un error

console.log(newStrArray); // Output: ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // Output: [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // Output: ['I', 'have', 3, 'tasks'];
