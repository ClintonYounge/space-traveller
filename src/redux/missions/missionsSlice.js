import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
  joined: false,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch missions');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch missions');
  }
});

const missionsSlice = createSlice({
  name: 'missionsSlice',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => (
          mission.mission_id === missionId ? { ...mission, joined: true } : mission)),
      };
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => (
          mission.mission_id === missionId ? { ...mission, joined: false } : mission)),
      };
    },
  },
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

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
