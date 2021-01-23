import {
  SET_CURRENCY_TO_TRANSFER,
  SET_QUANTITY_TO_TRANSFER,
  SET_DESTINATION_AND_FEES,
} from './actions';

export const initialState = {
  currencyId: '1',
  currentValue: { usd: null, token: null },
  destination: '',
  fees: { gasLimit: 0, gasPrice: 0 },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY_TO_TRANSFER:
      return { ...state, currencyId: action.id };
    case SET_QUANTITY_TO_TRANSFER: {
      return {
        ...state,
        currentValue: action.value,
      };
    }
    case SET_DESTINATION_AND_FEES:
      return { ...state, destination: action.destination, fees: action.fees };

    default:
      return state;
  }
}
