import getGifs from '../../src/helpers/getGifts';

describe('Test on getGifts', () => {
	test('should return an gifts array ', async () => {
		const gifs = await getGifs('Dragon Ball Z');
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
