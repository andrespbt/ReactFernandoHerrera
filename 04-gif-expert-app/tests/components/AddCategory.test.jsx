import { render, fireEvent, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Test on AddCategory', () => {
	const inputValue = 'Dragon Ball Z';

	test('should change the content box text', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: inputValue } });
		expect(input.value).toBe(inputValue);
	});

	test('should call onNewCategory if the input has a value ', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe('');
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('should not call onNewCategory if input is empty ', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(onNewCategory).toHaveBeenCalledTimes(0);
	});
});
