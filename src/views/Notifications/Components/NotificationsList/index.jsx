import PropTypes from 'prop-types';
import Text from 'Components/Text';

import styles from './styles.module.css';

function NotificationsList({ items }) {
  return (
    <section className={styles.container}>
      {items.map((notification) => (
        <a
          className={styles.notification}
          href={notification.url}
          target="_blank"
          rel="noopener noreferrer"
          key={notification.id}
        >
          <img src={notification.imageUrl} alt="" />
          <Text type="title" position="center">
            {notification.name}
          </Text>
          <Text position="center">{notification.description}</Text>
        </a>
      ))}
    </section>
  );
}
NotificationsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
};
export default NotificationsList;
