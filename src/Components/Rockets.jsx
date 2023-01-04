/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleReserved } from '../Redux/rocketSlice';

const Rockets = ({ id, image, title, desc }) => {
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
        <p>{desc}</p>
        <button
          onClick={reserveBtnClick}
          type="button"
          className="bg-[#007bff] text-white px-3 py-1.5 rounded mt-2 "
        >
          Reserve rocket
        </button>
      </div>
    </div>
  );
};

export default Rockets;
