// // src/redux/books/booksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
  missionJoined: true,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(url);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missionsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missions: action.payload,
      }))
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default missionsSlice.reducer;
