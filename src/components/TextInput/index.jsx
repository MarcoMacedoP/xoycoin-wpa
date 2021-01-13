import PropTypes from 'prop-types';
import styles from './styles.module.css';

function TextInput({
  label,
  type,
  value,
  onChange,
  name,
  as,
  placeholder,
  className,
}) {
  const Component = as;
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Component
        style={{ height: as === 'textarea' ? '5rem' : '2rem' }}
        className={styles.input}
        type={type}
        placeholder={placeholder}
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
  as: 'input',
  placeholder: '',
  className: '',
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  as: PropTypes.elementType,
  className: PropTypes.string,
};

export default TextInput;
