import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.content}>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
