import getData from './Api';

const ADDCOUNTRY = 'rockets/ADDCOUNTRY';

const initialState = [];
export const countryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADDCOUNTRY:
      return {
        ...action.country
      };
    default: return state;
  }
};

export function addcountry(country) {
  return {
    type: ADDCOUNTRY,
    country,
  };
}
export const getCountry = () => async (dispatch) => {
  const response = await getData();
  dispatch(addcountry(response));
};
