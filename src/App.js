import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryList from './Components/CountryList';
import CovidStatus from './Components/CovidStatus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route exact path="Update" element={<CovidStatus />} />
    </Routes>

  );
}

export default App;
