import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/userContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Tests on <HomePage/>', () => {
	const user = {
		id: 1,
		name: 'Andres',
	};
	test('should show the component without the user', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
	});

	test('should show the component with the user', () => {
		render(
			<UserContext.Provider value={{ user: user }}>
				<HomePage />
			</UserContext.Provider>
		);

		// screen.debug();
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toContain(user.name);
		expect(preTag.innerHTML).toContain(user.id.toString());
	});
});
