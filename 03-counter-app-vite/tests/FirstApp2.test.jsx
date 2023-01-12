/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas de <FirstApp/>', () => {
	const title = 'Hola, soy Andrés';
	const subTitle = 1994;

	test('Debe hacer match con el snapshot', () => {
		const { container } = render(
			<FirstApp
				title={title}
				subTitle={subTitle}
			/>
		);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el mensaje "Hola, soy Andrés"', () => {
		render(
			<FirstApp
				title={title}
				subTitle={subTitle}
			/>
		);

		expect(screen.getByText(title)).toBeTruthy();
	});

	test('Debe mostrar el titulo en un h1', () => {
		render(
			<FirstApp
				title={title}
				subTitle={subTitle}
			/>
		);

		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
	});

	test('Debe mostrar el subtitulo enviado por props', () => {
		render(
			<FirstApp
				title={title}
				subTitle={subTitle}
			/>
		);

		expect(screen.getByText(subTitle)).toBeTruthy();
	});
});
