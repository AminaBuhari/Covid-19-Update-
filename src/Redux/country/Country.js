import ApiData from '../Api';

const COUNTRIES = 'covidtracking/countreis/COUNTRIES';
const LOADING_COUNTRIES = 'covidtracking/countries/LOADING_COUNTRIES';
const REGIONS = 'covidtracking/region/REGIONS';


const initialState = [];
export const countryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_COUNTRIES:
      return {
        ...state, loading: true,
      };
    case COUNTRIES:
      return {
        ...state, fetching: false, countries: action.countries,
      };
    case REGIONS:
      return {
        ...state, countryData: action.countryData,
      };
   
    default: return state;
  }
};

export function loadingCountries() {
  return {
    type: LOADING_COUNTRIES,
  };
}

export function countries(apiData, date) {
  const formatApiData = Object.entries(apiData.dates[date].countries).map(([key, value]) => ({ ...value, country: key }));
  return {
    type: COUNTRIES,
    countries: formatApiData,
  };
}

export const getCountry = (date) => async (dispatch) => {
  dispatch(loadingCountries());
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
  dispatch(loadingCountries());
  setTimeout(async () => {
    const response = await ApiData.getRegions(date, country);
    dispatch(regions(response, { date, country }));
  }, 1000);
};





