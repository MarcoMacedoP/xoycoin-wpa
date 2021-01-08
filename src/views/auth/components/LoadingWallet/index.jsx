import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import Loader from 'Components/Loader';
import Text from 'Components/Text';
import walletImage from 'Assets/create_wallet.png';

import styles from './styles.module.css';

function LoadingWallet() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/transfers');
    }, 5000);
  }, []);
  return (
    <section className={styles.container}>
      <img src={walletImage} alt="" className={styles.image} />
      <Loader size={40} className={styles.loader} />
      <Text position="center">
        We are loading your Wallet now.
        <br />
        Please wait a few seconds until we&apos;re done.
      </Text>
    </section>
  );
}

export default LoadingWallet;
