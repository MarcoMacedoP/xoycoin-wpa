export const SET_SEED = 'SET_SEED';
export const STORE_WALLET_RESULT = 'STORE_WALLET_RESULT';

export const setSeed = (seed) => ({ type: SET_SEED, seed });

export const storeWalletResult = ({ mainAddress, keystore }) => ({
  type: STORE_WALLET_RESULT,
  mainAddress,
  keystore,
});
