import {combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { countryReducer } from './country/Country';
import { globalReducer } from './globaldata/global';
// Logger with default options
const rootReducer = combineReducers({
  country: countryReducer,
  globalData: globalReducer,
});
const loggerMiddleware = createLogger();
const store = configureStore({
  reducer: rootReducer,
  middleware:
  (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(thunkMiddleware),

});
export default store;
