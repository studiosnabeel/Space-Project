/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],

  status: 'idle',
  error: null,
};

const MISSIONS_API_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissionsData = createAsyncThunk(
  'missions/getMissionsData',
  async () => {
    const res = await fetch(MISSIONS_API_URL);
    const data = await res.json();
    const newMissionsArray = [];

    data.forEach((mission) => {
      const { mission_id, mission_name, description } = mission;
      const newMission = {
        id: mission_id,
        title: mission_name,
        desc: description,
      };
      newMissionsArray.push(newMission);
    });
    // console.log(newMissionsArray);
    return newMissionsArray;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    // joinMission(action, state) {
    //   console.log(action, state);
    // },
    // leaveMission(action, state) {
    //   console.log(action, state);
    // },
  },

  extraReducers(builder) {
    builder
      .addCase(getMissionsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMissionsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = [...action.payload];
      })
      .addCase(getMissionsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
