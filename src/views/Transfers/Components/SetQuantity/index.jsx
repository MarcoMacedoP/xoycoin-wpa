import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Text from 'Components/Text';
import Button from 'Components/Button';
import { ComposedLayout as Layout } from 'Components/Layout';

import { findSelectedCurrency, setQuantityToTransfer } from 'Store/Transfers';

import NumericKeyboard from '../NumericKeyboard';

import styles from './styles.module.css';

function SetQuantity() {
  const dispatch = useDispatch();
  const history = useHistory();

  const coins = useSelector((state) => ({
    usd: 'usd',
    token: findSelectedCurrency(state)?.type || '',
  }));
  const [quantity, setQuantity] = useState({ usd: null, token: null });
  const [selectedCoin, setSelectedCoin] = useState(coins.usd);

  const selectedQuantity =
    selectedCoin === coins.usd ? quantity.usd : quantity.token;

  const handleQuantityChange = (value = '') => {
    if (selectedCoin === coins.usd) {
      const tokenValue = value ? (parseFloat(value) * 0.12).toString() : null;
      setQuantity({ usd: value, token: tokenValue });
    } else {
      const usdValue = value ? (parseFloat(value) * 230.4).toString() : null;
      setQuantity({ token: value, usd: usdValue });
    }
  };

  const toggleSelectedCoin = () => {
    const updatedValue = selectedCoin === coins.token ? coins.usd : coins.token;
    setSelectedCoin(updatedValue);
  };

  const handleSubmit = () => {
    dispatch(setQuantityToTransfer(quantity));
    history.push('/transfers/send');
  };

  return (
    <Layout
      className={styles.container}
      contentClassName={styles.content}
      title="Send"
      footer={() => (
        <Button type="primary" label="Continue" onClick={handleSubmit} />
      )}
    >
      <section className={styles.header}>
        <Text type="title" position="center" className={styles.title}>
          {selectedQuantity || '0.00'}
          {` ${selectedCoin.toUpperCase()}`}
        </Text>
        <button
          type="button"
          onClick={toggleSelectedCoin}
          className={styles.toggleSelectedCoin}
        >
          <Text type="small">
            {selectedCoin === coins.TOKEN
              ? `${quantity.usd || '0.00'} ${coins.usd.toUpperCase()}`
              : `${quantity.token || '0.00'} ${coins.token.toUpperCase()}`}
          </Text>
        </button>
        <button type="button" className={styles.maxButton}>
          <Text position="center" type="small">
            Use maximum avaible
          </Text>
        </button>
      </section>
      <section className={styles.keyboard}>
        <NumericKeyboard
          value={selectedQuantity}
          onChange={handleQuantityChange}
        />
      </section>
    </Layout>
  );
}

export default SetQuantity;
