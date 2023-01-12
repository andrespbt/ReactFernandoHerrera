/** @jest-environment jsdom */
// Pruebas en el <CounterApp />
// test: debe hacer match con el spanshot
// test: debe mostrar el valor inicial de 100
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests tarea CounterApp', () => {
	const valor = 100;
	// const buttonSub = screen.getByRole('button', { name: 'btn-sub' });
	// const buttonReset = screen.getByRole('button', { name: 'btn-reset' });

	test('Debe hacer match con el snapshot', () => {
		const { container } = render(<CounterApp value={valor} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el valor inicial de 100', () => {
		const { container } = render(<CounterApp value={valor} />);
		expect(screen.getByText(100)).toBeTruthy();
	});

	test('Debe funcionar el boton +1', () => {
		const { container } = render(<CounterApp value={valor} />);
		fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
		expect(screen.getByText(101)).toBeTruthy();
	});

	test('Debe funcionar el boton -1', () => {
		const { container } = render(<CounterApp value={valor} />);
		fireEvent.click(screen.getByRole('button', { name: 'btn-sub' }));
		expect(screen.getByText(99)).toBeTruthy();
	});

	test('Debe funcionar el boton reset', () => {
		const { container } = render(<CounterApp value={valor} />);
		fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
		fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
		fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
		fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
		expect(screen.getByText(100)).toBeTruthy();
	});
});
