import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { getRegions } from '../Redux/country/Country';
import Region from './countryRegion';

function CountryDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.country.countryData);
  useEffect(() => {
    dispatch(getRegions(params.date, params.countryName));
  }, [dispatch]);

  return (
    <div className="container">
      <nav className="header-region">
        <div className="back">
          <button onClick={() => { navigate(`/${params.date}/countries`); }} type="button">
            <p className="text">
              <IoIosArrowBack size={18} />
              <span>Countries</span>
            </p>
          </button>
        </div>
        <h4 className="page-title">{params.countryName}</h4>
        <div className="space-div" />
      </nav>
      <div className="details-header">
        <div className="img-bg" style={{ backgroundImage: 'url(\'/images/map.png\')' }} />
        <div className="content">
          <h4 className="tiitle">{ countryDetails ? countryDetails.name : 'loading...'}</h4>
          <div className="introRegion">
            <p className="aboutc">
              {countryDetails ? countryDetails.today_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'loading...'}
              {' '}
            </p>
            <p className="aboutReg">
              Total Cases
            </p>
          </div>

          <div className="introRegion">
            <p className="aboutc">
              {countryDetails ? countryDetails.today_new_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'loading...'}
              {' '}

            </p>
            <p className="aboutReg">
              Cases Today
            </p>

          </div>

          <div className="introRegion">
            <p className="aboutc">
              {countryDetails ? countryDetails.today_new_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'loading...'}
              {' '}
            </p>
            <p className="aboutReg">
              Deaths
            </p>
          </div>

          <div className="introRegion">
            <p className="aboutc">
              {countryDetails ? countryDetails.today_new_recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'loading...'}
              {' '}
            </p>
            <p className="aboutReg">
              Recovered
            </p>

          </div>

        </div>
      </div>
      { countryDetails ? (
        <>
          <div className="heading">
            Country Regions -
            {' '}
            {params.date}
          </div>
          <ul className="regions-list">
            {
                 countryDetails.regions.length > 0
                   ? countryDetails.regions.map(
                     (region) => (
                       <Region
                         confirmedCases={region.today_new_confirmed}
                         name={region.name}
                         key={region.id}
                       />
                     ),
                   ) : (<p>No Regions Found</p>)
                 }
          </ul>
        </>
      ) : <p className="details-loading">Loading...</p>}

    </div>
  );
}
export default CountryDetails;
