import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: undefined,
  reserved: false,
};

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch rockets');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch rockets');
  }
});

const rocketsSlice = createSlice({
  name: 'rocketsSlice',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          rocket.id === rocketId ? { ...rocket, reserved: true } : rocket)),
      };
    },
    cancelReserve: (state, action) => {
      const rocketId = action.payload;
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          rocket.id === rocketId ? { ...rocket, reserved: false } : rocket)),
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;
