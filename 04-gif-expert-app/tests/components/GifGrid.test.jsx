import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on GifGrid', () => {
	const category = 'Dragon Ball Z';

	test('should show loading at the beginning', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});
		render(<GifGrid category={category} />);
		expect(screen.getByText('Loading...')).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test('should show items when images are loaded', () => {
		const gifs = [
			{
				id: 'abc',
				title: 'Dragon Ball Z',
				url: 'https://www.dragonball.com',
			},
			{
				id: 'abc2',
				title: 'Rick and Morty',
				url: 'https://www.rickandmorty.com',
			},
		];
		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});
		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
