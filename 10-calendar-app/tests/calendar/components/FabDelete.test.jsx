import { render, screen } from '@testing-library/react';
import { FabDelete } from '../../../src/calendar/components/FabDelete';
import { Provider } from 'react-redux';
import { store } from '../../../src/store';

describe('test on <FabDelete />', () => {
  test('should render component correctly', () => {
    render(
      <Provider store={store}>
        <FabDelete />
      </Provider>
    );
    screen.debug();
  });
});
