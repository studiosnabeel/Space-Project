/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DRAGON_URL = 'https://api.spacexdata.com/v3/dragons';

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

export const fetchdragonApi = createAsyncThunk(
  'dragons/fetchdragonsApi',
  async () => {
    const response = await fetch(DRAGON_URL);
    const data = await response.json();
    const dragonArray = [];

    data.forEach((dragon) => {
      const {
        dragon_id,
        flickr_images: { 0: img },
        dragon_name,
        description,
      } = dragon;
      const newdragon = {
        id: dragon_id,
        image: img,
        title: dragon_name,
        desc: description,
      };
      dragonArray.push(newdragon);
    });
    return dragonArray;
  },
);

export const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    // reservedragon: (state, action) => {},
    // canceldragon: (state, action) => {},
  },

  // extraReducers take care of the three states of promises i.e pending, fulfilled and rejected.

  extraReducers(builder) {
    builder
      .addCase(fetchdragonApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchdragonApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = [...action.payload];
      })
      .addCase(fetchdragonApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reservedragon, canceldragon } = dragonSlice.actions;

export default dragonSlice.reducer;
