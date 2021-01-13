import PropTypes from 'prop-types';
import Navbar from 'Components/Navbar';
import styles from './styles.module.css';

function Layout({ children, className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
Layout.defaultProps = { className: '' };

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export function ComposedLayout({
  children,
  className,
  footer,
  title,
  hasNavbar,
  canGoBack,
  contentClassName,
  headerRight,
}) {
  return (
    <div className={`${styles.composedContainer} ${className}`}>
      {hasNavbar && (
        <Navbar title={title} canGoBack={canGoBack} headerRight={headerRight} />
      )}
      <main className={contentClassName}>{children}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
}
ComposedLayout.defaultProps = {
  className: '',
  title: '',
  hasNavbar: true,
  canGoBack: true,
  footer: null,
  contentClassName: '',
  headerRight: () => null,
};
ComposedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  hasNavbar: PropTypes.bool,
  canGoBack: PropTypes.bool,
  contentClassName: PropTypes.string,
  footer: PropTypes.element,
  headerRight: PropTypes.func,
};

export default Layout;
