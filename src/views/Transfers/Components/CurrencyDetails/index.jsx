import { useSelector } from 'react-redux';

import { ComposedLayout as Layout } from 'Components/Layout';
import Text from 'Components/Text';
import Clipboard from 'Components/Clipboard';
import Button from 'Components/Button';

import { findSelectedCurrency } from 'Store/Transfers/selectors';

import styles from './styles.module.css';

function CurrencyDetails() {
  const { currency, address } = useSelector((state) => ({
    currency: findSelectedCurrency(state),
    address: state.auth.mainAddress,
  }));

  if (!currency) return 'Currency not found';

  return (
    <Layout title={currency.type}>
      <div className={styles.header}>
        <img src={currency.image} alt="" className={styles.logo} />
        <Text type="title" className={styles.valueInToken}>
          {currency.value.original}
        </Text>
        <div className={styles.valueInUSD}>
          <Text>
            <strong>{currency.value.usd}</strong>
          </Text>
          <Text type="small">USD</Text>
        </div>
      </div>
      <section className={styles.address}>
        <Clipboard text={address} />
      </section>
      <section className={styles.actions}>
        <Button type="primary" label="Send" url="/transfers/set-quantity" />
        <Button type="secondary" label="Add fund" url="/transfers/found" />
      </section>
    </Layout>
  );
}

export default CurrencyDetails;
