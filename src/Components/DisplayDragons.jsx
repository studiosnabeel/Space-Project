
import { useSelector } from 'react-redux';
import Dragons from './Dragons';
import { selectDragons } from '../Redux/dragonSlice';

const DisplayDragons = () => {
  const dragons = useSelector(selectDragons);

  return (
    <div>
      <div>
        {dragons.map((dragon) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Dragons key={dragon.id} {...dragon} />
        ))}
      </div>
    </div>
  );
};

export default DisplayDragons;