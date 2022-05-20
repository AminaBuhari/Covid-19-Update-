import ApiData from '../Api';

const GLOBAL_DATA = 'covidtracking/global/GLOBAL_DATA';
const DATA = 'covid19traking/metrics/DATA';
const initialState = [];
export const globalReducer = (state = initialState, action = []) => {
  switch (action.type) {
    case GLOBAL_DATA:
      return action.data;
    case DATA:
      return [];
    default: return state;
  }
};

export const globalData = (apiData) => {
  const formatData = Object.entries(apiData.dates).map(
    ([key, value]) => (
      {
        date: key,
        todayConfirmed: Object.entries(value.countries).map(
          ([value]) => (value.today_new_confirmed),
        ).reduce((a, b) => a + b, 0),
        todayDeath: Object.entries(value.countries).map(
          ([value]) => (value.today_new_deaths),
        ).reduce((a, b) => a + b, 0),
        todayRecovered: Object.entries(value.countries).map(
          ([value]) => (value.today_new_recovered),
        ).reduce((a, b) => a + b, 0),
        source: 'John Hopkins Hospital',

      }),
  );
  return {
    type: GLOBAL_DATA,
    data: formatData,
  };
};

export const getGlobalData = (dateFrom, dateTo) => async (dispatch) => {
  setTimeout(async () => {
    const response = await ApiData.getGlobalData(dateFrom, dateTo);
    dispatch(globalData(response));
  }, 100);
};

export const fetching = () => ({
  type: DATA,
});
