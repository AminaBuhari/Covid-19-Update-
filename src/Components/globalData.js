import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGlobalData } from '../Redux/globaldata/global';
import PickDate from './pickDate';
import Data from './Data';

function GlobalData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.globalData);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getGlobalData('2022-03-10', '2022-03-17'));
    }
  }, [dispatch]);

  return (
    <div className="container">
      <PickDate />
      <h4>Statistics By Date</h4>
      <ul className="global-list">
        { data ? data.map((data) => <Data key={data.date} date={data.date} confirmedCases={data.todayConfirmed} confirmedDeath={data.todayDeath} confirmedRecovered={data.todayRecovered} source={data.source} />) : 'Loading...'}
      </ul>
    </div>
  );
}
export default GlobalData;
