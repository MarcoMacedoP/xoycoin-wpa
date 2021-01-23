import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Text({ children, type, position, className }) {
  return (
    <p
      className={`${styles[`text-${type}`]} ${className}`}
      style={{ textAlign: position }}
    >
      {children}
    </p>
  );
}

Text.defaultProps = { type: 'default', position: 'left', className: '' };

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  type: PropTypes.oneOf(['default', 'title', 'small']),
};

export default Text;
