import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import MissionsList from '../Components/Missions/missionsList';
import store from '../redux/configureStore';

describe('Missions loads', () => {
  test('the component renders', () => {
    render(
      <Provider store={store}>
        <MissionsList />
      </Provider>,
    );
    expect(screen.getByText('Missions')).toBeInTheDocument();
  });
});
