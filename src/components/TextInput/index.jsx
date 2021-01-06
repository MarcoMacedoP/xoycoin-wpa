import styles from './styles.module.css';

export function TextInput({ label, type, value, onChange, name }) {
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
