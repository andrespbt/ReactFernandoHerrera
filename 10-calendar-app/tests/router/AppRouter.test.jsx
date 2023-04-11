import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { AppRouter } from '../../src/router/AppRouter';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { CalendarPage } from '../../src/calendar';

jest.mock('../../src/hooks/useAuthStore.js');

jest.mock('../../src/calendar', () => ({
  CalendarPage: () => <h1>CalendarPage</h1>,
}));

describe('tests on <AppRouter />', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should show loading screen and call checkAuthToken', () => {
    const mockCheckAuthToken = jest.fn();

    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);

    expect(screen.getByLabelText('spinner')).toBeTruthy();

    expect(mockCheckAuthToken).toHaveBeenCalled();
  });

  test('should show login if user is not authenticated', () => {
    const mockCheckAuthToken = jest.fn();

    useAuthStore.mockReturnValue({
      status: 'not-authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/auth2/asda/asda']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('should show calendar if user is authenticated', () => {
    const mockCheckAuthToken = jest.fn();

    useAuthStore.mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('CalendarPage')).toBeTruthy();
  });
});
