import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextInput from 'Components/TextInput';
import Button from 'Components/Button';
import Text from 'Components/Text';
import { ComposedLayout as Layout } from 'Components/Layout';

import { setDestinationAndFees, findSelectedCurrency } from 'Store/Transfers';

import styles from './styles.module.css';

function Send() {
  const dispatch = useDispatch();
  const history = useHistory();
  const quantity = useSelector(
    (state) =>
      `${state.transfers.currentValue.token} ${
        findSelectedCurrency(state).type
      }`
  );
  const fees = { gasLimit: 21000, gasPrice: 108 };
  const [reciever, setReciever] = useState();

  const handleSubmit = () => {
    dispatch(setDestinationAndFees({ fees, destination: reciever }));

    history.push('/transfers/confirm');
  };

  return (
    <Layout
      title="Send"
      footer={() => (
        <Button type="primary" label="Continue" onClick={handleSubmit} />
      )}
    >
      <Text>
        <strong>{`Amount to send: ${quantity}`}</strong>
      </Text>
      <SendCard name="Reciever">
        <TextInput
          label=""
          placeholder="0x1233123112312"
          value={reciever}
          onChange={(event) => setReciever(event.target.value)}
        />
      </SendCard>
      <SendCard name="Gas Limit">
        <RangeSelector value={fees.gasLimit} />
      </SendCard>
      <SendCard name="Gas Price">
        <RangeSelector value={fees.gasPrice} />
      </SendCard>
    </Layout>
  );
}

function SendCard({ name, label, children }) {
  return (
    <section className={styles.send}>
      <Text className={styles.sendTitle}>{name}</Text>
      <Text type="small">
        <strong>{label}</strong>
      </Text>
      {children}
    </section>
  );
}

SendCard.defaultProps = { label: '' };

SendCard.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function RangeSelector() {
  return (
    <div className={styles.range}>
      <input type="range" />
      <div className={styles.rangeIndicator}>
        <button type="button">Slow</button>
        <button type="button">Fast</button>
      </div>
    </div>
  );
}

export default Send;
