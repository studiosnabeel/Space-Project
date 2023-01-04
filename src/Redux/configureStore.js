import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice';

import rocketReducer from './rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});
