export function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

const nombre = 'Andres';

console.log(`Este es un texto: ${getSaludo(nombre)}  `);
