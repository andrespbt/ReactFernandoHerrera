import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests on useFetchGifs', () => {
	test('should return initial state', () => {
		const { result } = renderHook(() => useFetchGifs('Dragon Ball Z'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('should return an images array and isLoading = false', async () => {
		const { result } = renderHook(() => useFetchGifs('Dragon Ball Z'));

		await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

		const { images, isLoading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
