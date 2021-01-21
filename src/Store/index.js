import { combineReducers, createStore } from 'redux';

import * as transfers from './Transfers';
import * as auth from './Auth';
import * as currencys from './Currencys';

const initialState = {
  currencys: currencys.initialState,
  transfers: transfers.initialState,
  auth: auth.initialState,
};

const store = createStore(
  combineReducers({
    transfers: transfers.reducer,
    auth: auth.reducer,
    currencys: currencys.reducer,
  }),
  initialState
);

export default store;
