import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en funciones', () => {
	test('getUser debe retornar un objeto', () => {
		const testUser = {
			uid: 'ABC123',

			username: 'El_Papi1502',
		};

		const user = getUser();

		expect(user).toEqual(testUser);
	});

	test('getUsuarioActivo debe retornar un objeto', () => {
		const testUser = {
			uid: 'ABC567',
			username: 'andrespbt',
		};

		const user = getUsuarioActivo('andrespbt');

		expect(user).toEqual(testUser);
	});
});
