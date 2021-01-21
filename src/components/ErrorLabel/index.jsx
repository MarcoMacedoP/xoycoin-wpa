import PropTypes from 'prop-types';

import styles from './styles.module.css';

function ErrorLabel({ children, className }) {
  return <p className={`${styles.label} ${className}`}>{children}</p>;
}

ErrorLabel.defaultProps = { className: '' };
ErrorLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ErrorLabel;
