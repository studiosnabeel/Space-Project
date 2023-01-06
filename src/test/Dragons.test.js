/* eslint-disable import/extensions */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import DisplayDragons from '../Components/Dragons/DisplayDragons';
import store from '../redux/configureStore.js';

describe('Test Dragon', () => {
  test('should Test Dragons component', () => {
    const tree = render(
      <Provider store={store}>
        <DisplayDragons />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
