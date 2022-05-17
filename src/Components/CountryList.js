import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountry } from '../Redux/Country';

const backicon = require('../assets/less.png');
const settings = require('../assets/setting.png');
const mic = require('../assets/mic.png');

const CountryList = () => {
  const country = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);
  return (
    <div className="background">
      <div> 
        <div>
          <img src={backicon} alt="backicon" />
          <p>2015</p>
        </div>
        <p>mostviews</p>
        <div>
          <img src={mic} alt="mic" />
          <img src={settings} alt="settings" />
        </div>
        <div>
          <Link id="anchora" to="/">Update</Link>
          <Link id="anchorb" to="/Update">List</Link>
          <p>{country.data.confirmed}</p>

        </div>
      </div>
    </div>
  );
};

export default CountryList;
