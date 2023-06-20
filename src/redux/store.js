import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: {},
    missions: missionsReducer,
  },
});

export default store;
