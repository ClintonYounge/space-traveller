import { configureStore } from '@reduxjs/toolkit';
// import rocketsReducer from './rockets/rocketsSlice';
// import categoriesReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: 'rocketsReducer',
    missions: 'missionsReducer',
  },
});

export default store;
