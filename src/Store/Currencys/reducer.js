import ethIcon from 'Assets/ethereum_icon.png';

import * as actions from './actions';

const tokens = JSON.parse(process.env.REACT_APP_TOKENS);
const initialValue = { original: '0.000000000', usd: '0.00' };

export const initialState = [
  ...tokens.map((token, index) => ({
    name: token.name,
    type: token.alias,
    image: `${process.env.PUBLIC_URL}/tokens/token-${index}.png`,
    id: index.toString(),
    value: initialValue,
  })),
  {
    id: tokens.length.toString(),
    type: 'ETH',
    value: { original: '---', usd: '---' },
    name: 'Ethereum',
    image: ethIcon,
  },
];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_BALANCES: {
      const { eth } = action;
      const currencys = state.map((c) => {
        if (c.type === 'ETH') {
          return {
            ...c,
            value: { ...c.value, original: eth },
          };
        }
        return c;
      });
      return currencys;
    }
    default:
      return state;
  }
}
