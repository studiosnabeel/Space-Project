import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';
import dragonReducer from './dragonSlice';

import rocketReducer from './rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    dragons: dragonReducer,
  },
});
