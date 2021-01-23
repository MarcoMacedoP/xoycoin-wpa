export const SET_CURRENCY_TO_TRANSFER = 'SET_CURRENCY_TO_TRANSFER';
export const SET_QUANTITY_TO_TRANSFER = 'SET_QUANTITY_TO_TRANSFER';
export const SET_DESTINATION_AND_FEES = 'SET_DESTINATION_AND_FEES';

export const setCurrencyToTransfer = (id) => ({
  type: SET_CURRENCY_TO_TRANSFER,
  id,
});

export const setQuantityToTransfer = (value) => ({
  type: SET_QUANTITY_TO_TRANSFER,
  value,
});

export const setDestinationAndFees = ({ destination, fees }) => ({
  type: SET_DESTINATION_AND_FEES,
  destination,
  fees,
});
