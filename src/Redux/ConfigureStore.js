import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { countryReducer } from './country/Country';
import { globalReducer } from './globaldata/global';
// Logger with default options
const rootReducer = combineReducers({
  country: countryReducer,
  globalData: globalReducer,
});
const store = configureStore({ reducer: rootReducer },
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ));

export default store;