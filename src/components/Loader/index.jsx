import PropTypes from 'prop-types';

import styles from './styles.module.css';

function Loader({ size, color, className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={styles.loader}
        style={{
          borderWidth: size / 5,
          borderTopColor: color,
          width: size,
          height: size,
        }}
      />
    </div>
  );
}
Loader.defaultProps = {
  size: 120,
  color: 'var(--color-primary)',
  className: '',
};
Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Loader;
