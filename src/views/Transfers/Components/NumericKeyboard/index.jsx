import PropTypes from 'prop-types';

import styles from './styles.module.css';

function NumericKeyboard({ value, onChange }) {
  const handleKeyClick = (key) => {
    if (value === null) {
      onChange(key);
      return;
    }
    const updatedValue = `${value}${key}`;
    onChange(updatedValue);
  };

  const handleDelete = () => {
    const updatedValue = value.slice(0, value.length - 1);
    onChange(updatedValue);
  };

  const handleDotClick = () => {
    const hasDot = /[.]/g.test(value);
    if (hasDot) {
      return;
    }
    handleKeyClick('.');
  };

  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];

  return (
    <div className={styles.container}>
      {rows.map((row) => (
        <section className={styles.row} key={row[0]}>
          {row.map((key) => (
            <button
              key={key}
              type="button"
              className={styles.number}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </section>
      ))}
      <section className={styles.row}>
        <button
          type="button"
          className={styles.number}
          onClick={handleDotClick}
        >
          .
        </button>
        <button
          type="button"
          className={styles.number}
          onClick={() => handleKeyClick('0')}
        >
          0
        </button>
        <button type="button" className={styles.number} onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--color-primary)"
            width="40px"
            height="32px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z" />
          </svg>
        </button>
      </section>
    </div>
  );
}

NumericKeyboard.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default NumericKeyboard;
