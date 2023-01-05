const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => ['ABC', 123];

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea
// 1. La primera posición del arreglo se llamará nombre
// y el segundo se llamará setNombre

const usarEstado = valor => [valor, () => console.log('Hola mundo')];

const [nombre, setNombre] = usarEstado('Goku');

console.log(nombre);
setNombre();
