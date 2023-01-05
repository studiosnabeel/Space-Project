/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DRAGON_URL = 'https://api.spacexdata.com/v3/dragons';

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

export const fetchDragonApi = createAsyncThunk(
  'dragons/fetchDragonsApi',
  async () => {
    const response = await fetch(DRAGON_URL);
    const data = await response.json();
    const dragonArray = [];

    data.forEach((dragon) => {
      const {
        dragon_id,
        flickr_images: { 0: img },
        dragon_name,
        type,
        description,
      } = dragon;
      const newDragon = {
        id: dragon_id,
        image: img,
        title: dragon_name,
        type,
        desc: description,
      };
      dragonArray.push(newDragon);
    });
    return dragonArray;
  },
);

export const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    // reserveDragon: (state, action) => {},
    // cancelDragon: (state, action) => {},
  },

  // extraReducers take care of the three states of promises i.e pending, fulfilled and rejected.

  extraReducers(builder) {
    builder
      .addCase(fetchDragonApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragonApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = [...action.payload];
      })
      .addCase(fetchDragonApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectDragons = (state) => state.dragons.dragons;

export const { reserveDragon, cancelDragon } = dragonSlice.actions;

export default dragonSlice.reducer;
