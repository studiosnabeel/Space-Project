import { useSelector } from 'react-redux';
import Rockets from './Rockets';
import { selectRockets } from '../Redux/rocketSlice';

const DisplayRockets = () => {
  const rockets = useSelector(selectRockets);

  return (
    <div>
      <div>
        {rockets.map((rocket) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Rockets key={rocket.id} {...rocket} />
        ))}
      </div>
    </div>
  );
};

export default DisplayRockets;
