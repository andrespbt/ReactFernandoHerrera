import { onCloseDateModal, onOpenDateModal, uiSlice } from '../../../src/store/ui/uiSlice';

describe('test on uiSlice', () => {
  test('should return initial state', () => {
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
  });

  test('should should change isDateModalOpen correctly', () => {
    let state = uiSlice.getInitialState();

    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();

    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
