import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState } from '../../fixtures/authStates';
import { testUserCredentials } from '../../fixtures/testUser';

describe('test on authSlice', () => {
  test('should return initial state', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('should login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));

    expect(state).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test('should logout', () => {
    const errorMessage = 'Invalid credentials';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: errorMessage,
    });
  });

  test('should logout', () => {
    const state = authSlice.reducer(initialState, onChecking());
    expect(state).toEqual({
      status: 'checking',
      user: {},
      errorMessage: undefined,
    });
  });

  test('should clean error message', () => {
    const errorMessage = 'Invalid credentials';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

    const newState = authSlice.reducer(authenticatedState, clearErrorMessage());

    expect(newState.errorMessage).toBe(undefined);
  });
});
