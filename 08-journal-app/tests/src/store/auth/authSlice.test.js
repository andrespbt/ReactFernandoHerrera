import { authSlice, checkingCredentials, login, logout } from '../../../../src/store/auth/authSlice';
import { demoUser, initialState, authenticatedState } from '../../../fixtures/authFixtures';
describe('test on authSlice', () => {
  test('should return initial state and have "auth" as name', () => {
    expect(authSlice.name).toBe('auth');

    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test('should realize the authentication', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    const { uid, email, displayName, photoURL } = demoUser;

    expect(state).toEqual({
      status: 'authenticated',
      uid,
      email,
      displayName,
      photoURL,
      errorMessage: null,
    });
  });

  test('should realize the logout without arguments', () => {
    const state = authSlice.reducer(authenticatedState, logout());

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test('should realize the logout and show error message', () => {
    const errorMessage = 'Invalid credentials';
    const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage,
    });
  });

  test('should change state to "checkin"', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials);
    expect(state.status).toBe('checking');
  });
});
