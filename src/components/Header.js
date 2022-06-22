import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    const { email, currency, total } = this.props;
    return (
      <div className="header-main">
        <div className="header-title">
          <h1>
            TrybeWallet
          </h1>
          <span className="material-symbols-outlined wallet-icon">
            account_balance_wallet
          </span>
        </div>
        <div className="info-container">
          <div className="user-info">
            <span className="material-symbols-outlined">
              account_circle
            </span>
            <span data-testid="email-field">{ email }</span>
          </div>
          <div className="wallet-info">
            <span className="wallet-span">Dispesa Total:</span>
            <span className="wallet-span" data-testid="total-field">{ total }</span>
            <span
              className="wallet-span"
              data-testid="header-currency-field"
            >
              { currency }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: 'BRL',
  total: '0',
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
