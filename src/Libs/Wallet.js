import erc20 from 'erc20-wallet';

export function storePassword({ password }) {
  erc20.password = password;
}
export async function createSeed({ password }) {
  storePassword({ password });
  const seed = await erc20.createSeed();
  erc20.seed = seed;
  return seed;
}

export async function createWallet() {
  try {
    const keystore = await erc20.createdStored();
    console.log(keystore);
    erc20.numAddr = 10;
    erc20.keystore = keystore;
    const address = await erc20.generateAddress();
    console.log(address);
    const mainAddress = address[0].address;
    console.log({ mainAddress });
    erc20.address = address;
    const addressInJSON = await erc20.encodeJson();
    return { status: 'success', payload: { addressInJSON, mainAddress } };
  } catch (error) {
    return { status: 'error', payload: error };
  }
}

export function importWalletFromSeed({ seed }) {
  erc20.seed = seed;
}

export async function getBalances({ address }) {
  if (erc20.provider !== process.env.REACT_APP_PROVIDER) {
    console.log({ provider: process.env.REACT_APP_PROVIDER });
    erc20.provider = process.env.REACT_APP_PROVIDER;
  }
  const { data: initialization } = await fetch(
    'https://erc20.lomeli.xyz/xoycoin/data-general',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  ).then((r) => r.json());
  Object.keys(initialization).forEach((prop) => {
    /* eslint no-prototype-builtins: 0 */
    if (initialization.hasOwnProperty(prop) && erc20.hasOwnProperty(prop)) {
      erc20[prop] = initialization[prop];
    }
  });

  try {
    const [ethBalance, tokenBalance] = await Promise.all([
      erc20.getBalanceAddress(address),
      erc20.getTokenAddress(address),
    ]);

    return { status: 'success', payload: { eth: ethBalance, tokenBalance } };
  } catch (error) {
    return { status: 'error', payload: error };
  }
}

export async function sendETH({
  quantity,
  fees,
  address,
  destination,
  password,
}) {
  try {
    const result = await erc20.sendETH(
      password,
      address,
      destination,
      quantity,
      fees.gasPrice,
      fees.gasLimit
    );

    return { status: 'success', payload: result };
  } catch (error) {
    return { status: 'error', payload: error };
  }
}
