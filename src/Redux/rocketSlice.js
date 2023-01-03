import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
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
});
