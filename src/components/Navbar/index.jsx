import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';

export function Navbar({ hasBackButton = true, title }) {
  const history = useHistory();

  return (
    <nav className={styles.container}>
      <div className={styles.backButton} onClick={history.goBack}>
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
      </div>
      <p className={styles.title}>{title}</p>
    </nav>
  );
}
