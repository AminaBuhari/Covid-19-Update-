import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reset } from '../Redux/country/Country';

const Data = (props) => {
  const {
    date, confirmedCases, confirmedDeath, confirmedRecovered, source,
  } = props;
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <button className="globalButton" onClick={() => { dispatch(reset()); navigation(`/${date}/countries`); }} type="button" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}https://i.ibb.co/Q9Wmxw9/realSize.png)` }}>
      <div className="WrapperGlobe">
        <h4>{date}</h4>
        <p>
          {confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          {' '}
          Cases
        </p>
        <p>

          {confirmedDeath.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          {' '}
          Death ☠
        </p>
        <p>
          {confirmedRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          {' '}
          Recovered

        </p>
        <p>
          Source:-
          {' '}
          {' '}
          {source}

        </p>

      </div>
    </button>
  );
};

Data.propTypes = {
  date: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
  confirmedDeath: PropTypes.number.isRequired,
  confirmedRecovered: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
};
export default Data;
