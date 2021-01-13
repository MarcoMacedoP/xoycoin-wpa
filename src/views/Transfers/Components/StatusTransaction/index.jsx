import { ComposedLayout as Layout } from 'Components/Layout';
import Text from 'Components/Text';
import Button from 'Components/Button';

import styles from './styles.module.css';

function StatusTransaction() {
  const Footer = () => (
    <>
      <Button label="Continue" url="/transfers" type="primary" />
    </>
  );
  return (
    <Layout
      hasNavbar={false}
      className={styles.container}
      contentClassName={styles.content}
      footer={<Footer />}
    >
      <Text type="title">Transaction successful</Text>
      <Text position="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porttitor ultricies viverra. Praesent consectetur sapien felis, vitae
        sollicitudin tellus malesuada sit amet.
      </Text>
    </Layout>
  );
}

export default StatusTransaction;
