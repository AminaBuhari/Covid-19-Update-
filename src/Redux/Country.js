import ApiData from './Api';

const COUNTRIES = 'covidtracking/countreis/COUNTRIES';
const LOADING_COUNTRIES = 'covidtracking/countreis/COUNTRIES';

const initialState = [];
export const countryReducer = (state = initialState, action = { countries: [] }) => {
  switch (action.type) {
    case LOADING_COUNTRIES:
      return {
        ...state, loading: true,
      };
    case COUNTRIES:
      return {
        ...state, fetching: false, countries: action.countries,
      };
    default: return state;
  }
};

export function loadingCountries() {
  return {
    type: LOADING_COUNTRIES,
  };
}

export function countries(countryData) {
  const formatApiData = Object.entries(countryData.dates['2022-03-10'].countries).map(([key, value]) => ({ ...value, country: key }));
  return {
    type: COUNTRIES,
    countries: formatApiData,
  };
}

export const getCountry = () => async (dispatch) => {
  dispatch(loadingCountries());
  setTimeout(async () => {
    const response = await ApiData.getCountry();
    dispatch(countries(response));
  }, 1000);
};
