import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsData } from '../../Redux/missionSlice';
import MissionsList from './missionsList';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.missions.length === 0) {
      dispatch(getMissionsData());
    }
  }, [dispatch, missions.missions.length], missions.missions.length);

  return (
    missions.status === 'loading' ? <h2>Loading</h2> : <MissionsList missions={missions.missions} />
  );
};

export default MissionsPage;
