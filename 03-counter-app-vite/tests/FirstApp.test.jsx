/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas de <FirstApp/>', () => {
	// test('Debe de hacer match con el snapshot', () => {
	// 	const title = 'Hola my nombre es Andres';
	// 	const { container } = render(
	// 		<FirstApp
	// 			title={title}
	// 			subTitle={123}
	// 		/>
	// 	);
	// 	expect(container).toMatchSnapshot();
	// });

	test('Debe mostrar el titulo en un h1', () => {
		const title = 'Hola my nombre es Andres';
		const { container, getByText, getByTestId } = render(
			<FirstApp
				title={title}
				subTitle={123}
			/>
		);
		// expect(getByText(title)).toBeTruthy();

		// const h1 = container.querySelector('h1');
		// expect(h1.innerHTML).toContain(title);
		expect(getByTestId('test-title').innerHTML).toBe('Hola my nombre es Andres');
	});

	test('Debe mostrar el subtitulo enviado por props', () => {
		const title = 'Hola my nombre es Andres';
		const subTitle = 1994;
		const { getByText } = render(
			<FirstApp
				title={title}
				subTitle={subTitle}
			/>
		);

		expect(getByText(subTitle)).toBeTruthy();
	});
});
