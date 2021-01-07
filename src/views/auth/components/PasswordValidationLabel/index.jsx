import PropTypes from 'prop-types';
import styles from './styles.module.css';

function PasswordValidationLabel({ isValid = false, text }) {
  return (
    <div className={styles.container}>
      {isValid ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      )}

      <p className={styles.title}>{text}</p>
    </div>
  );
}
PasswordValidationLabel.propTypes = {
  isValid: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default PasswordValidationLabel;
