import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Dragons from '../Components/Dragons/Dragons';

jest.mock('react-redux');

describe('Rockets test', () => {
  test('should test rocket component', () => {
    useSelector.mockReturnValue([
      {
        id: 'dragon1',
        flicker_images: 'https://i.imgur.com/9fWdwNv.jpg',
        rocket_name: 'Dragon 1',
        description: 'Test',
        reserved: !true,
      },
    ]);
    const tree = render(<Dragons />);
    expect(tree).toMatchSnapshot();
  });
});
