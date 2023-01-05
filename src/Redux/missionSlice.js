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
      const {
        mission_id,
        mission_name,
        description,
      } = mission;
      const newMission = {
        id: mission_id,
        title: mission_name,
        desc: description,
        reserved: false,
      };
      newMissionsArray.push(newMission);
    });
    return newMissionsArray;
  },
);

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMissionReserved: (state, action) => {
      const mission = state.missions.find(
        (mission) => mission.id === action.payload,
      );
      if (mission) {
        mission.reserved = !mission.reserved;
      }
    },
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

export const { toggleMissionReserved } = missionSlice.actions;
export default missionSlice.reducer;
