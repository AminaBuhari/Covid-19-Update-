import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryList from './CountryList';
import CovidStatus from './CovidStatus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route exact path="Update" element={<CovidStatus />} />
    </Routes>

  );
}

export default App;
