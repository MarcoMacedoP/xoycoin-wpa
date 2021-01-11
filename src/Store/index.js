import { combineReducers, createStore } from 'redux';

import tokenImage from 'Assets/token_icon.png';
import ethIcon from 'Assets/ethereum_icon.png';
import * as transfers from './Transfers';

const initialState = {
  currencys: [
    {
      id: '1',
      name: 'XoyCoin',
      type: 'XOY',
      value: { original: '0.000000000', usd: '0.00' },
      image: tokenImage,
    },
    {
      id: '2',
      type: 'ETH',
      value: { original: '---', usd: '---' },
      name: 'Ethereum',
      image: ethIcon,
    },
  ],
  transfers: transfers.initialState,
};

const store = createStore(
  combineReducers({
    transfers: transfers.reducer,
    currencys: (s = {}, a) => {
      switch (a.type) {
        default:
          return s;
      }
    },
  }),
  initialState
);

export default store;
