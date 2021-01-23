import { SET_SEED, STORE_WALLET_RESULT } from './actions';

export const initialState = { seed: '', keystore: '', mainAddress: '' };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEED:
      return {
        ...state,
        seed: action.seed,
      };
    case STORE_WALLET_RESULT:
      return {
        ...state,
        mainAddress: action.mainAddress,
        keystore: action.keystore,
      };
    default:
      return state;
  }
}
