import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');

describe('Tests on MultipleCustomHooks', () => {
	test('should show the default component', () => {
		useFetch.mockReturnValue({
			data: null,
			hasError: null,
			isLoading: true,
		});

		render(<MultipleCustomHooks />);

		expect(screen.getByText('Breaking Bad quotes')).toBeTruthy();
		expect(screen.getByText('Loading...')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next quote' });

		expect(nextButton.disabled).toBeTruthy();
	});

	test('should show a Quote', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Andres', quote: 'Hola mundo' }],
			hasError: null,
			isLoading: false,
		});

		render(<MultipleCustomHooks />);

		expect(screen.getByText('Hola mundo')).toBeTruthy();
		expect(screen.getByText('Andres')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next quote' });

		expect(nextButton.disabled).toBeFalsy();
	});

	test('should call increment function', () => {
		const nextQuote = jest.fn();
		useFetch.mockReturnValue({
			data: [{ author: 'Andres', quote: 'Hola mundo' }],
			hasError: null,
			isLoading: false,
		});

		render(<MultipleCustomHooks />);

		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		nextButton.onClick = nextQuote();

		fireEvent.click(nextButton);

		expect(nextQuote).toHaveBeenCalled();
	});
});
