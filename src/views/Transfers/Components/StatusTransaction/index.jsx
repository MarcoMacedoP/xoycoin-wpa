import { ComposedLayout as Layout } from 'Components/Layout';
import Text from 'Components/Text';
import Button from 'Components/Button';

import useQueryParams from 'Hooks/useQueryParams';

import styles from './styles.module.css';

function StatusTransaction() {
  const query = useQueryParams();
  const error = query.get('error');
  const hash = query.get('hash');
  console.log({ error, hash });

  const Footer = () => (
    <>
      <Button label="Continue" url="/transfers" type="primary" />
    </>
  );

  return (
    <Layout
      hasNavbar={false}
      className={error ? styles.containerError : styles.container}
      contentClassName={styles.content}
      footer={Footer}
    >
      <Text type="title">
        {error ? 'Error making the transaction' : 'Transaction successful'}
      </Text>
      <Text position="center">
        <strong>Hash: </strong>
      </Text>
      <Text position="center">{hash}</Text>
    </Layout>
  );
}

export default StatusTransaction;
