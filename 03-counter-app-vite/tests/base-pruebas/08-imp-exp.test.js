import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
	test('getHeroeById debe devolver un heroe por id', () => {
		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
	});

	test('getHeroeById debe devolver undefined si no existe el heroe', () => {
		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeUndefined();
	});
});

// Tarea
// debe retornar un arreglo de los heroes de DC
// length === 3
// toEqual al arreglo filtrado

// debe retornar un arreglo con los heroes de marvel
// length === 2

describe('Tarea ', () => {
	test('getHeroesByOwner debe retornar un arreglo con los heroes DC', () => {
		const owner = 'DC';

		const heroesArr = getHeroesByOwner(owner);

		expect(heroesArr.length).toBe(3);
		expect(heroesArr).toEqual(heroes.filter(hero => hero.owner === owner));
	});

	test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
		const owner = 'Marvel';
		const heroesArr = getHeroesByOwner(owner);
		expect(heroesArr.length).toBe(2);
		expect(heroesArr).toEqual(heroes.filter(hero => hero.owner === owner));
	});
});
