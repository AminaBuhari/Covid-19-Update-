import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGlobalData } from '../Redux/globaldata/global';

 const pickDate = () => {
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

  return (
    <div>
      <h3>Choose Date Range</h3>
      <div>
        <input type="date" name="dateFrom" onChange={onChange} value={inputDates.dateFrom} />
        <input type="date" name="dateTo" onChange={onChange} value={inputDates.dateTo} />
        <button type="button" onClick={handleSubmit}> Submit</button>
      </div>
    </div>
  );
};

export default pickDate;