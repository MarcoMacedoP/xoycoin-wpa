export function findSelectedCurrency(state) {
  console.log(state.transfers);
  return state.currencys.find((c) => c.id === state.transfers.currencyId);
}
// Temp, remove when adding another selector
export default findSelectedCurrency;
