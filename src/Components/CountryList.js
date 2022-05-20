import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams , useNavigate} from 'react-router-dom';
import Country from './Country';
import { getCountry } from '../Redux/country/Country';


const settings = require('../assets/setting.png');
const mic = require('../assets/mic.png');

const CountryList = () => {
  const countries = useSelector((state) => state.country.countries);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (countries === undefined || countries.length === 0) {
      dispatch(getCountry(params.date));
    }
  }, [dispatch]);
  return (
    <div className="background">
      <div className="headerBody">
        <div>
          <button onClick={() => { navigate('/'); }} type="button">
            <p className="button-text">
              <IoIosArrowBack size={18} />
              <span>{params.date}</span>
            </p>
          </button>
        </div>
        <p>Global Data</p>
        <div>
          <img src={mic} alt="mic" />
          <img src={settings} alt="settings" />
        </div>
      </div>
      <ul className = "countryWrap" >
        { countries ? countries.map((country) => <Country key={country.id} name={country.name} confirmedCases={country.today_new_confirmed} />) : 'Loading...'}
      </ul>
    </div>
  );
};

export default CountryList;
