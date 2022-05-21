import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryStatus from './Components/CountryStatus';
import GlobalData from './Components/globalData';
import CountryList from './Components/CountryList';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<GlobalData />} />
      <Route
        path="/:date/countries"
        element={<CountryList />}
        exact
      />
      <Route
        path="/:date/countries/:countryName"
        element={<CountryStatus />}
        exact
      />
    </Routes>

  );
}

export default App;
