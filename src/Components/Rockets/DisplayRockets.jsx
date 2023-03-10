import { useSelector } from 'react-redux';
import Rockets from './Rockets';
import { selectRockets } from '../../Redux/rocketSlice';

const DisplayRockets = () => {
  const rockets = useSelector(selectRockets);

  return (
    <div>
      <div>
        {rockets.map((rocket) => (
          <Rockets key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default DisplayRockets;
