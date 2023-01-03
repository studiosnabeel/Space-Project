import { configureStore } from '@reduxjs/toolkit';

import rocketReducer from './rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});
