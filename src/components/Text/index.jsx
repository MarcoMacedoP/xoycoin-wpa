import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Text({ children, type }) {
  return <p className={styles[`text-${type}`]}>{children}</p>;
}

Text.defaultProps = { type: 'default' };

Text.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['default', 'title']),
};

export default Text;
