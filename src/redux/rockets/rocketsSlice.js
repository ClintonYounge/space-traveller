import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    rockets: [],
    isLoading: false,
    error: undefined,
    rocketJoined: false,
};

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
    const response = await axios.get(url);
    return response.data;
});

const rocketsSlice = createSlice({
    name: 'rocketsSlice',
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

export default rocketsSlice.reducer;
