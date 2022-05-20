import ApiData from '../Api';

const COUNTRIES = 'covidtracking/countreis/COUNTRIES';
const REGIONS = 'covidtracking/region/REGIONS';
const RESET = 'covid19traking/countries/RESET';
const RESET_COUNTRY_DETAILS = 'covid19traking/countries/RESET_COUNTRY_DETAILS';



const initialState = [];
export const countryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COUNTRIES:
      return {
        ...state, countries: action.countries,
      };
    case REGIONS:
      return {
        ...state, countryData: action.countryData,
      };
    case RESET_COUNTRY_DETAILS:
      return { ...state, countryDetails: undefined };
    case RESET:
      return { };
    default: return state;
  }
};


export function countries(apiData, date) {
  const formatApiData = Object.entries(apiData.dates[date].countries).map(([key, value]) => ({ ...value, country: key }));
  return {
    type: COUNTRIES,
    countries: formatApiData,
  };
}

export const getCountry = (date) => async (dispatch) => {
  setTimeout(async () => {
    const response = await ApiData.getCountry(date);
    dispatch(countries(response, date));
  }, 1000);
};

export const regions = (apiData, requestData) => ({
  type: REGIONS,
  countryData: apiData.dates[requestData.date].countries[requestData.country],
});

export const getRegions = (date, country) => (dispatch) => {
  setTimeout(async () => {
    const response = await ApiData.getRegions(date, country);
    dispatch(regions(response, { date, country }));
  }, 100 );
};

export const reset = () => ({
  type: RESET,
});

export const resetCountryDetails = () => ({
  type: RESET_COUNTRY_DETAILS,
});



