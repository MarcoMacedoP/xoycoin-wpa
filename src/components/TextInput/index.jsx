import PropTypes from 'prop-types';
import styles from './styles.module.css';

function TextInput({ label, type, value, onChange, name }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      />
    </div>
  );
}

TextInput.defaultProps = {
  type: 'text',
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
