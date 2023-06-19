import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/missions" />
        <Route path="/profile" />
      </Routes>
    </>
  );
}

export default App;
