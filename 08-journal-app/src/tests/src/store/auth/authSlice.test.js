import { authSlice } from '../../../../store/auth/authSlice';
import { initialState } from '../../../fixtures/authFixtures';

describe('test on authSlice', () => {
  test('should return initial state and have "auth" as name', () => {
    console.log(authSlice);

    expect(authSlice.name).toBe('auth');

    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });
});
