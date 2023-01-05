const getUser = () => ({ name: 'Andres', email: 'andres@andres.com' });

console.log(getUser());

// Tarea
// 1. transformar a funcion flecha
// 2. retornar un objeto implicito
// 3. pruebas

function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre
  };
}

const usuarioActivo = getUsuarioActivo('Andres');

// Solucion

const getUsuarioActivo2 = nombre => ({
  uid: 'ABC567',
  username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Fernando');

console.log(usuarioActivo2);
