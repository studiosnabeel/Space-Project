import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toggleReserved } from '../../Redux/dragonSlice';

const Dragons = ({ dragon }) => {
  const {
    image, id, title, desc, reserved,
  } = dragon;
  const dispatch = useDispatch();

  const reserveBtnClick = () => {
    dispatch(toggleReserved(id));
  };
  return (
    <div className="mt-2 mb-4 flex mx-12 items-start">
      <div className=" flex items-center w-[200px] h-[170px] lg:w-[400px] lg:h-[300px] flex-none">
        <img
          className="self-center object-contain w-[400px] h-[300px]"
          src={image}
          alt="picture1"
        />
      </div>
      <div className=" mx-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>
          {reserved && (
          <span
            className="
            rounded bg-sky-400 text-center px-2 mr-2 text-white"
          >
            reserved
          </span>
          )}
          {desc}
        </p>
        <button
          onClick={reserveBtnClick}
          type="button"
          className={
          reserved
            ? 'drop-shadow-md border-2 border-slate-400 px-3 text-slate-800 py-1.5 rounded mt-2'
            : 'bg-[#007bff] text-white px-3 py-1.5 rounded mt-2 '
        }
        >
          {reserved ? 'Cancel Reservation' : 'Reserve rocket'}
        </button>
      </div>
    </div>
  );
};

Dragons.defaultProps = { dragon: null };
Dragons.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    reserved: PropTypes.bool,
    image: PropTypes.string,
  }),
};

export default Dragons;
