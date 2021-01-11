import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setCurrencyToTransfer } from 'Store/Transfers/actions';
import Text from 'Components/Text';
import headerBackground from 'Assets/balance_background.png';
import brandLogo from 'Assets/logo_mini.png';

import styles from './styles.module.css';

function Balance() {
  const history = useHistory();
  const currencys = useSelector((state) => state.currencys);
  const dispatch = useDispatch();
  const onCurrencyPress = (id) => {
    dispatch(setCurrencyToTransfer(id));
    history.push('/transfers/currency');
  };
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.currencys}>
        {currencys.map((currency) => (
          <Currency
            onClick={() => onCurrencyPress(currency.id)}
            image={currency.image}
            name={currency.name}
            value={currency.value}
            type={currency.type}
            key={currency.id}
          />
        ))}
      </div>
    </section>
  );
}
function Header() {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <nav>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="28px"
            height="28px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
          </svg>
        </button>
        <div>
          <img className={styles.logo} src={brandLogo} alt="" />
        </div>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="28px"
            height="28px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
            <circle cx="16" cy="12" r="1.5" />
          </svg>
        </button>
      </nav>
      <Text type="title" position="center">
        0.00
        <span className={styles.cashSymbol}>$</span>
      </Text>
    </header>
  );
}
function Currency({ image, name, value, type, onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.currency}>
      <section>
        <img src={image} alt="" />
        <div>
          <Text>{type}</Text>
          <Text type="small">{name}</Text>
        </div>
      </section>
      <div>
        <Text position="right">
          <strong>{value.original}</strong>
        </Text>
        <Text position="right" type="small">
          {value.usd}
        </Text>
      </div>
    </button>
  );
}
Currency.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({
    original: PropTypes.string.isRequired,
    usd: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Balance;
