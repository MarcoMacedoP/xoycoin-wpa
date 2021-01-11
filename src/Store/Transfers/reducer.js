import { SET_CURRENCY_TO_TRANSFER } from './actions';

export const initialState = { currencyId: '1' };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY_TO_TRANSFER:
      return { ...state, currencyId: action.id };
    default:
      return state;
  }
}
