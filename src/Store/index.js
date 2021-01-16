import { combineReducers, createStore } from 'redux';

import ethIcon from 'Assets/ethereum_icon.png';
import * as transfers from './Transfers';

const tokens = JSON.parse(process.env.REACT_APP_TOKENS);

const initialState = {
  currencys: [
    ...tokens.map((token, index) => ({
      name: token.name,
      type: token.alias,
      image: `${process.env.PUBLIC_URL}/tokens/token-${index}.png`,
      id: index.toString(),
      value: { original: '0.000000000', usd: '0.00' },
    })),
    {
      id: tokens.length.toString(),
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
