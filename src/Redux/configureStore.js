import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missionSlice';


export default configureStore({
  reducer: {missions: missionSlice },
})