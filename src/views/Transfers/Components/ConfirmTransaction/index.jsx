import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ComposedLayout as Layout } from 'Components/Layout';
import Button from 'Components/Button';
import Text from 'Components/Text';
import TextInput from 'Components/TextInput';

import { findSelectedCurrency } from 'Store/Transfers/selectors';
import { sendETH } from 'Libs/Wallet';

import styles from './styles.module.css';

function ConfirmTransaction() {
  const [password, setPassword] = useState();

  const { currency, transfer, address } = useSelector((state) => ({
    currency: findSelectedCurrency(state),
    transfer: state.transfers,
    address: state.auth.mainAddress,
  }));

  const history = useHistory();

  const onSubmit = async () => {
    const { status, payload } = await sendETH({
      password,
      address,
      fees: transfer.fees,
      quantity: transfer.currentValue.token,
      destination: transfer.destination,
    });
    if (status === 'success') {
      history.push(`/transfers/status?hash=${payload}`);
    } else history.push(`/transfers/status?error=${payload}`);
  };

  const Footer = () => (
    <>
      <Button label="Send" type="primary" onClick={onSubmit} />
      <Button label="Cancel" />
      <Text type="small" position="center">
        This transaction is operated by Ethereum network.
      </Text>
    </>
  );

  return (
    <Layout
      title="Confirm your order"
      footer={Footer}
      contentClassName={styles.content}
    >
      <img src={currency.image} alt="" className={styles.logo} />
      <Text type="title" className={styles.tokenValue}>
        {`${transfer.currentValue.token} ${currency.type}`}
      </Text>
      <Text className={styles.usdValue}>
        {`${transfer.currentValue.usd} USD`}
      </Text>
      <TextInput
        label="Insert your password to continue"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className={styles.input}
      />
    </Layout>
  );
}

export default ConfirmTransaction;
