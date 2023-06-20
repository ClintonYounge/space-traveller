import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MissionsContainer from './components/MissionsContainer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/rockets" />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/profile" />
      </Routes>
    </>
  );
}

export default App;
