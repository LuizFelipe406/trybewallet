import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    const { email, moeda, expenses } = this.props;
    return (
      <div className="header-main">
        <div className="header-title">
          <img src="http://trybewallet.surge.sh/static/media/wallet.c40086e0.png" alt="imagem de carteira" />
          <div className="title">
            <h1>TR</h1>
            <h1 className="title-green">Y</h1>
            <h1>BE WALLET</h1>
          </div>
        </div>
        <div className="info-container">
          <div className="user-info">
            <span className="material-symbols-outlined icon">
              account_circle
            </span>
            <span data-testid="email-field">{ email }</span>
          </div>
          <div className="wallet-info">
            <span className="material-symbols-outlined icon">
              monetization_on
            </span>
            <span className="wallet-span">R$:</span>
            <span className="wallet-span" data-testid="total-field">
              {
                expenses.reduce((acc, curr) => {
                  const { value, currency, exchangeRates } = curr;
                  const preco = parseFloat(value);
                  const cambio = parseFloat(exchangeRates[currency].ask);
                  const soma = preco * cambio;
                  const correct = Math.floor(soma * 100) / 100;
                  return acc + correct;
                }, 0)
              }
            </span>
            <span
              className="wallet-span"
              data-testid="header-currency-field"
            >
              { moeda }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moeda: 'BRL',
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  moeda: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
