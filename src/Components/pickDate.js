import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGlobalData } from '../Redux/globaldata/global';

const PickDate = () => {
  const [inputDates, setInputDates] = useState({
    dateFrom: '2022-05-10',
    dateTo: '2022-05-17',
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputDates({
      ...inputDates,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(getGlobalData(inputDates.dateFrom, inputDates.dateTo));
  };

  const dateFrom = 'DateFrom';
  return (
    <div className="header">
      <div className="intro">
        <img className="introImg" src="https://i.ibb.co/kB2dcpc/covid-removebg-preview.png" alt="covid" />
        <h3>COVID-19 TRACKER</h3>

      </div>

      <div className="inputData">
        <label htmlFor={dateFrom} placeholder="Date-From">
          Date-From
          <br />
          <input type="date" id={dateFrom} name="dateFrom" onChange={onChange} value={inputDates.dateFrom} />
        </label>

        <label htmlFor="dateTo">
          Date-To
          <br />
          <input type="date" id="date-To" name="dateTo" onChange={onChange} value={inputDates.dateTo} />
        </label>

        <button className="input" type="button" onClick={handleSubmit}> SUBMIT</button>
      </div>
    </div>
  );
};

export default PickDate;
