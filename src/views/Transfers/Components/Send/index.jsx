import Button from 'Components/Button';
import Text from 'Components/Text';
import { ComposedLayout as Layout } from 'Components/Layout';

import styles from './styles.module.css';

function Send() {
  return (
    <Layout
      title="Send"
      footer={
        <Button type="primary" label="Continue" url="/transfers/confirm" />
      }
    >
      <Text>
        <strong> Amount to send: NaN</strong>
      </Text>
      <SendCard />
      <SendCard />
      <SendCard />
    </Layout>
  );
}

function SendCard() {
  return (
    <section className={styles.send}>
      <Text className={styles.sendTitle}> Gas price </Text>
      <Text type="small">
        <strong>21000 GAS LIMIT </strong>
      </Text>
      <div className={styles.range}>
        <input type="range" />
        <div className={styles.rangeIndicator}>
          <button type="button">Slow</button>
          <button type="button">Fast</button>
        </div>
      </div>
    </section>
  );
}

export default Send;
