import ApiData from '../Api';

const GLOBAL_DATA = 'covidtracking/global/GLOBAL_DATA';

const initialState = [];
export const globalReducer = (state = initialState, action = []) => {
  switch (action.type) {
    case GLOBAL_DATA:
      return action.data;
    default: return state;
  }
};

export const globalData = (apiData) => {
  const formatData = Object.entries(apiData.dates).map(
    ([key, value]) => (
      {
        date: key,
        todayConfirmed: Object.entries(value.countries).map(
          ([key, value]) => (value.today_new_confirmed),
        ).reduce((a, b) => a + b, 0),
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
