import { useSelector } from 'react-redux';

import { findSelectedCurrency } from 'Store/Transfers/selectors';

import Navbar from 'Components/Navbar';
import Clipboard from 'Components/Clipboard';
import Layout from 'Components/Layout';
import Text from 'Components/Text';

import logo from 'Assets/logo_mini.png';

import styles from './styles.module.css';

function Found() {
  const address = '0x09a5436b9b16937b5dbe8f7851c90d50102f2fbe';
  const currency = useSelector(findSelectedCurrency);

  return (
    <Layout className={styles.container}>
      <Navbar title="" className={styles.navbar} />
      <section className={styles.content}>
        <section className={styles.card}>
          <img src={currency.image} alt="" />
          <img
            src={`https://chart.googleapis.com/chart?chs=300x300&chld=L|1&cht=qr&chl=ethereum:${address}`}
            alt=""
            className={styles.qrCode}
          />
          <Clipboard text={address} />
        </section>
        <section className={styles.warning}>
          <Text position="center">
            {`Attention: please do not deposit any digital assets other than ${currency.type} to the above address`}
          </Text>
          <img src={logo} alt="" />
        </section>
      </section>
    </Layout>
  );
}

export default Found;
