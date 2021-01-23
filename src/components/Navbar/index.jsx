import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.css';

function Navbar({ title, className, canGoBack, headerRight }) {
  const history = useHistory();

  return (
    <nav className={`${styles.container} ${className}`}>
      {canGoBack && (
        <button
          className={styles.backButton}
          onClick={history.goBack}
          type="button"
        >
          <svg
            title="back button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
      )}
      <p className={styles.title}>{title}</p>
      {headerRight && <div className={styles.headerRight}>{headerRight()}</div>}
    </nav>
  );
}
Navbar.defaultProps = {
  title: '',
  className: '',
  canGoBack: true,
  headerRight: () => null,
};

Navbar.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  canGoBack: PropTypes.bool,
  headerRight: PropTypes.func,
};

export default Navbar;
