import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Rockets from '../Components/Rockets/Rockets';

jest.mock('react-redux');

describe('Rockets test', () => {
  test('should test rocket component', () => {
    useSelector.mockReturnValue([
      {
        id: '123',
        flicker_images:
          'https://imgur.com/DaCfMsj.jpg,https://imgur.com/azYafd8.jpg',
        rocket_name: 'Falcon 1',
        description: 'Test',
        reserved: !true,
      },
    ]);
    const tree = render(<Rockets />);
    expect(tree).toMatchSnapshot();
  });
});
