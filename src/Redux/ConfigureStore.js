import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { countryReducer } from './Country';

const store = configureStore({ reducer: countryReducer },
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ));

export default store;