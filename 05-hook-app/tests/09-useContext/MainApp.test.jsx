import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Tests on <MainApp/>', () => {
	test('should show Home page', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('HomePage')).toBeTruthy();
	});

	test('should show Login page', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByLabelText('login').className).toContain('active');
	});

	test('should show Login page', () => {
		render(
			<MemoryRouter initialEntries={['/about']}>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('About')).toBeTruthy();
	});
});
