import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export function Button(props) {
  const { label, onClick, type, url } = props;
  const history = useHistory();

  const handleClick = () => {
    if (type === 'disabled') return;
    if (url) {
      history.push(url);
    } else {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`${styles.wrapper} ${styles[`wrapper-${type}`]}`}
      onClick={handleClick}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  type: 'default',
  url: undefined,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'primary', 'disabled']),
  url: PropTypes.string,
};
