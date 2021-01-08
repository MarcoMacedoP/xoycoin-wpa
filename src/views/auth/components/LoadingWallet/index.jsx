import Loader from 'Components/Loader';
import Text from 'Components/Text';
import walletImage from 'Assets/create_wallet.png';

import styles from './styles.module.css';

function LoadingWallet() {
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
