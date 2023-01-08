import React from 'react';
import { useSelector } from 'react-redux';
import { selectReserveDragons } from '../Redux/dragonSlice';
import { selectReserveMissions } from '../Redux/missionSlice';
import { selectReserveRockets } from '../Redux/rocketSlice';

const Profile = () => {
  const reservedRockets = useSelector(selectReserveRockets);
  const reservedMissions = useSelector(selectReserveMissions);
  const reservedDragons = useSelector(selectReserveDragons);

  return (
    <div className="flex justify-between mt-2">
      <div className="flex flex-col w-1/3 mx-4">
        <h3 className="font-bold py-5">My Missions</h3>
        {reservedMissions.map((mission) => (
          <p key={mission.id} className="border p-2">
            {mission.title}
          </p>
        ))}
      </div>
      <div className="flex flex-col w-1/3 mx-2">
        <h3 className="font-bold py-5">My Rockets</h3>
        {reservedRockets.map((rocket) => (
          <p key={rocket.id} className="border p-2">
            {rocket.title}
          </p>
        ))}
      </div>
      <div className="flex flex-col w-1/3 mx-2">
        <h3 className="font-bold py-5">My Dragons</h3>
        {reservedDragons.map((dragon) => (
          <p key={dragon.id} className="border p-2">
            {dragon.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
