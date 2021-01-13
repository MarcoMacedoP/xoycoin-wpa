import Text from 'Components/Text';

import icon from 'Assets/empty_icon.png';
import styles from './styles.module.css';

function EmptyNotifications() {
  return (
    <section className={styles.container}>
      <Text type="title">Ups</Text>
      <img src={icon} alt="" />
      <Text type="small">You don&apos;t have any notifications yet</Text>
    </section>
  );
}
export default EmptyNotifications;
