import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MissionsContainer from './components/MissionsContainer';
import Profile from './components/Profile';
import RocketsContainer from './components/RocketContainer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RocketsContainer />} />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
