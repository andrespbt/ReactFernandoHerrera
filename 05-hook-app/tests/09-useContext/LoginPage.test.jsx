import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/userContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Test on <LoginPage/>', () => {
	test('should show the component without the user', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
	});

	test('should call setUser to onClick event on button', () => {
		const setUserMock = jest.fn();
		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const setUserButton = screen.getByRole('button');
		fireEvent.click(setUserButton);
		expect(setUserMock).toHaveBeenCalledWith({ email: 'andrespbt14@hotmail.com', id: 123, name: 'Andres' });
	});
});
