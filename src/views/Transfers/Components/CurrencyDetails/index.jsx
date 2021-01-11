import { useSelector } from 'react-redux';

import Navbar from 'Components/Navbar';
import Text from 'Components/Text';
import Clipboard from 'Components/Clipboard';
import Button from 'Components/Button';

import styles from './styles.module.css';

function findCurrency(state) {
  return state.currencys.find((c) => c.id === state.transfers.currencyId);
}

function CurrencyDetails() {
  const currency = useSelector(findCurrency);

  if (!currency) return 'Currency not found';

  return (
    <>
      <Navbar title={currency.type} />
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
        <Clipboard text="0x09a5436b9b16937b5dbe8f7851c90d50102f2fbe " />
      </section>
      <section className={styles.actions}>
        <Button type="primary" label="Send" url="/transfers/set-quantity" />
        <Button type="secondary" label="Add fund" url="/transfers/found" />
      </section>
    </>
  );
}

export default CurrencyDetails;
