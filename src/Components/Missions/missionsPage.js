import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsData } from '../../Redux/missionSlice';
import MissionsList from './missionsList';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissionsData());
  }, [dispatch]);

  return (
    missions.status === 'loading' ? <h2>Loading</h2> : <MissionsList missions={missions.missions} />
  );
};

export default MissionsPage;
