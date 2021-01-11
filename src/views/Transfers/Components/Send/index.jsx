import Navbar from 'Components/Navbar';
import Button from 'Components/Button';
import Text from 'Components/Text';

import styles from './styles.module.css';

function Send() {
  return (
    <>
      <Navbar title="Send" />
      <Text>
        <strong> Amount to send: NaN</strong>
      </Text>
      <SendCard />
      <SendCard />
      <SendCard />
      <Button type="primary" label="Continue" url="/transfers/confirm" />
    </>
  );
}

function SendCard() {
  return (
    <section className={styles.send}>
      <Text className={styles.sendTitle}> Gas price </Text>
      <Text type="small">
        <strong>21000 GAS LIMIT </strong>
      </Text>
    </section>
  );
}

export default Send;
