import { getHeroeById } from './bases/imp-exp';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea:
//     // importar getHeroeById
//     const heroe = getHeroeById(3);
//     resolve(heroe);
//   }, 2000);
// });

// promesa.then(heroe => {
//   console.log('Then de la promesa', heroe);
// });

const getHeroeByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea:
      // importar getHeroeById
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el heroe');
      }
    }, 2000);
  });
};

getHeroeByIdAsync(3).then(console.log).catch(console.warn);
