import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ComposedLayout as Layout } from 'Components/Layout';
import Button from 'Components/Button';
import Text from 'Components/Text';
import TextInput from 'Components/TextInput';

import { findSelectedCurrency } from 'Store/Transfers/selectors';

import styles from './styles.module.css';

function ConfirmTransaction() {
  const currency = useSelector(findSelectedCurrency);
  const history = useHistory();

  const onSubmit = () => history.push('/transfers/status');

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
      footer={<Footer />}
      contentClassName={styles.content}
    >
      <img src={currency.image} alt="" className={styles.logo} />
      <Text type="title" className={styles.tokenValue}>
        NaN ETH
      </Text>
      <Text className={styles.usdValue}>0.00 USD</Text>
      <TextInput
        label="Insert your password to continue"
        type="password"
        className={styles.input}
      />
    </Layout>
  );
}

export default ConfirmTransaction;
