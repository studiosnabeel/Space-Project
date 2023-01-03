import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});
