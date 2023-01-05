import React from 'react';
import { useSelector } from 'react-redux';
import { selectReserveRockets } from '../Redux/rocketSlice';

const Profile = () => {
  const reservedRockets = useSelector(selectReserveRockets);
  return (
    <div className="flex justify-between mt-2">
      <div className="flex flex-col w-1/3 mx-4">
        <h3 className="font-bold">My Missions</h3>
      </div>
      <div className="flex flex-col w-1/3 mx-2">
        <h3 className="font-bold">My Rockets</h3>
        {reservedRockets.map((rocket) => (
          <p key={rocket.id} className="border p-2">
            {rocket.title}
          </p>
        ))}
      </div>
      <div className="flex flex-col w-1/3 mx-2">
        <h3 className="font-bold">My Dragons</h3>
        <p className="border p-2">dragonfly</p>
      </div>
    </div>
  );
};

export default Profile;
