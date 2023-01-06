import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import DisplayRockets from '../Components/Rockets/DisplayRockets';
import store from '../redux/configureStore';

describe('Test Rocket', () => {
  test('should Test Rocket component', () => {
    const tree = render(
      <Provider store={store}>
        <DisplayRockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
