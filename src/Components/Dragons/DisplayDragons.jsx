import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dragons from './Dragons';
import { selectDragons, fetchDragonApi } from '../../Redux/dragonSlice';

const DisplayDragons = () => {
  const dragons = useSelector(selectDragons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(fetchDragonApi());
    }
  }, [dispatch, dragons.length]);

  return (
    <div>
      <div>
        {dragons.map((dragon) => (
          <Dragons key={dragon.id} dragon={dragon} />
        ))}
      </div>
    </div>
  );
};

export default DisplayDragons;
