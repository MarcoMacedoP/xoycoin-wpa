import styles from './styles.module.css';

export function Text({ children, type = 'default', html }) {
  return <p className={styles[`text-${type}`]}>{children}</p>;
}
