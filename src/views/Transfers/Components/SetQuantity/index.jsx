import Text from 'Components/Text';
import Button from 'Components/Button';
import { ComposedLayout as Layout } from 'Components/Layout';

import NumericKeyboard from '../NumericKeyboard';

import styles from './styles.module.css';

function SetQuantity() {
  return (
    <Layout
      className={styles.container}
      contentClassName={styles.content}
      title="Send"
      footer={<Button type="primary" label="Continue" url="/transfers/send" />}
    >
      <section className={styles.header}>
        <Text type="title" position="center" className={styles.title}>
          0.00 USD
        </Text>
        <Text type="small"> 0.00 ETH</Text>
        <button type="button" className={styles.maxButton}>
          <Text position="center" type="small">
            Use maximum avaible
          </Text>
        </button>
      </section>

      <section className={styles.keyboard}>
        <NumericKeyboard />
      </section>
    </Layout>
  );
}

export default SetQuantity;
