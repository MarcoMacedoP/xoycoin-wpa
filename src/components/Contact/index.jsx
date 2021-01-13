import PropTypes from 'prop-types';
import Text from 'Components/Text';
import styles from './styles.module.css';

function ContactCard({ title, desc, icon }) {
  return (
    <section className={styles.container}>
      {icon && <div className={styles.icon}>{icon()}</div>}
      <div className={styles.info}>
        <Text>
          <strong>{title}</strong>
        </Text>
        <Text>{desc}</Text>
      </div>
    </section>
  );
}

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default ContactCard;
