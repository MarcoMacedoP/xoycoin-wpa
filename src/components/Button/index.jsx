import styles from './styles.module.css';

import { Link } from 'react-router-dom';

export function Button({ label = 'Continue', onClick, type = 'default', url }) {
  const isUrl = url;

  const Wrapper = ({ children, className }) =>
    isUrl ? (
      <Link to={url} className={className}>
        {children}
      </Link>
    ) : (
      <button className={className}>{children}</button>
    );

  return (
    <Wrapper className={`${styles.wrapper} ${styles[`wrapper-${type}`]}`}>
      <span className={styles.label}>{label}</span>
    </Wrapper>
  );
}
