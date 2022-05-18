import React from 'react';
import { useNavigate } from 'react-router-dom';

const Data = (props) => {
  const { date, confirmedCases } = props;
  const navigation = useNavigate();

  return (
    <button onClick={() => { navigation(`/${date}/countries`, { replace: true }); }} type="button" style={{ backgroundImage: 'url(images/map.png)' }}>
      <div>
        <h4>{date}</h4>
        <p>
          {confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          {' '}
          Cases
        </p>
      </div>
    </button>
  );
};
export default Data;
