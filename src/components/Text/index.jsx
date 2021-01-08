import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Text({ children, type, position }) {
  return (
    <p className={styles[`text-${type}`]} style={{ textAlign: position }}>
      {children}
    </p>
  );
}

Text.defaultProps = { type: 'default', position: 'left' };

Text.propTypes = {
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  type: PropTypes.oneOf(['default', 'title', 'small']),
};

export default Text;
