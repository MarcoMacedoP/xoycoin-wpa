import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from 'Components/Loader';
import ErrorLabel from 'Components/ErrorLabel';
import Text from 'Components/Text';

import { createWallet } from 'Libs/Wallet';
import { storeWalletResult } from 'Store/Auth';
import useStatus from 'Hooks/useStatus';

import walletImage from 'Assets/create_wallet.png';
import styles from './styles.module.css';

function LoadingWallet() {
  const history = useHistory();
  const status = useStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWallet = async () => {
      status.change({ value: 'loading' });
      const result = await createWallet();
      status.change({
        value: result.status,
        payload: result.payload,
      });
      if (result.status === 'success') {
        dispatch(storeWalletResult(result.payload));
        history.push('/transfers');
      }
    };

    fetchWallet();
  }, []);

  return (
    <section className={styles.container}>
      <img src={walletImage} alt="" className={styles.image} />
      {status.current === 'loading' && (
        <Loader size={40} className={styles.loader} />
      )}
      {status.current !== 'error' ? (
        <Text position="center">
          We are loading your Wallet now.
          <br />
          Please wait a few seconds until we&apos;re done.
        </Text>
      ) : (
        <ErrorLabel>{status.payload}</ErrorLabel>
      )}
    </section>
  );
}

export default LoadingWallet;
