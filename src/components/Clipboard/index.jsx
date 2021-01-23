import PropTypes from 'prop-types';
import Text from 'Components/Text';
import styles from './styles.module.css';

function Clipboard({ text }) {
  const handleClick = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('Async: Copying to clipboard was successful!');
      },
      (err) => {
        console.error('Async: Could not copy text: ', err);
      }
    );
  };
  return (
    <button className={styles.container} type="button" onClick={handleClick}>
      <Text type="small" className={styles.content}>
        {text}
      </Text>
      <span className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--color-primary)"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
        </svg>
      </span>
    </button>
  );
}

Clipboard.propTypes = { text: PropTypes.string.isRequired };

export default Clipboard;
