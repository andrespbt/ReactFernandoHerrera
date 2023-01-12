import { getHeroeById } from '../../src/base-pruebas/08-imp-exp';
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
	test('Debe retornar un heroe', done => {
		const id = 1;

		getHeroeByIdAsync(id).then(resp => {
			expect(resp).toEqual(getHeroeById(id));
			done();
		});
	});

	test('Debe retornar mensaje de error al no encontrar heroe', done => {
		const id = -1;
		getHeroeByIdAsync(id).catch(err => {
			expect(err).toBe('No se pudo encontrar el héroe');
			done();
		});
	});
});
