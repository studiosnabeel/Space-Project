import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRocketApi = createAsyncThunk(
  'rockets/fetchRocketsApi',
  async () => {
    const response = await fetch(ROCKET_URL);
    const data = await response.json();
    const rocketArray = [];

    data.forEach((rocket) => {
      let {
        rocket_id,
        flickr_images: { 0: img },
        rocket_name,
        description,
      } = rocket;
      const newRocket = {
        id: rocket_id,
        image: img,
        title: rocket_name,
        desc: description,
      };
      rocketArray.push(newRocket);
    });
    return rocketArray;
  }
);

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {},
    cancelRocket: (state, action) => {},
  },

  // extraReducers take care of the three states of promises i.e pending, fulfilled and rejected.

  extraReducers(builder) {
    builder
      .addCase(fetchRocketApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRocketApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = [...action.payload];
      })
      .addCase(fetchRocketApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;

export default rocketSlice.reducer;
