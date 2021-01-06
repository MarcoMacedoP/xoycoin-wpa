import styles from './styles.module.css';

export function Layout({ header, children }) {
  return (
    <div className={styles.container}>
      {header}
      <main className={styles.content}>{children}</main>
    </div>
  );
}
