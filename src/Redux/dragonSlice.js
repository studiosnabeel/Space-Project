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
        id,
        flickr_images: { 0: img },
        name,
        type,
        description,
      } = dragon;
      const newDragon = {
        id,
        image: img,
        title: name,
        type,
        desc: description,
        reserved: false,
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
    toggleReserved: (state, action) => {
      const dragon = state.dragons.find(
        (dragon) => dragon.id === action.payload,
      );
      if (dragon) {
        dragon.reserved = !dragon.reserved;
      }
    },
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

export const selectReserveDragons = (state) => state.dragons.dragons.filter(
  (dragon) => dragon.reserved === true,
);

export const { toggleReserved } = dragonSlice.actions;

export default dragonSlice.reducer;
