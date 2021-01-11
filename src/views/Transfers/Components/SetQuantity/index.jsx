import Navbar from 'Components/Navbar';
import Text from 'Components/Text';
import Button from 'Components/Button';

import styles from './styles.module.css';

function SetQuantity() {
  return (
    <section className={styles.container}>
      <Navbar title="Send" />
      <section className={styles.header}>
        <Text type="title" position="center" className={styles.title}>
          0.00 USD
        </Text>
        <Text type="small"> 0.00 ETH</Text>
      </section>
      <button type="button" className={styles.maxButton}>
        <Text position="center" type="small">
          Use maximum avaible
        </Text>
      </button>
      <section className={styles.keyboard}>NumericKeyboardComponent</section>
      <Button type="primary" label="Continue" url="/transfers/send" />
    </section>
  );
}

export default SetQuantity;
