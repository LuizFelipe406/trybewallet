import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, currency, total } = this.props;
    return (
      <div>
        <div className="header-title">
          <h1>
            TrybeWallet
          </h1>
          <span className="material-symbols-outlined wallet-icon">
            account_balance_wallet
          </span>
        </div>
        <div>
          <div className="user-info">
            <span className="material-symbols-outlined">
              account_circle
            </span>
            <span data-testid="email-field">{ email }</span>
          </div>
          <div className="wallet-info">
            <span>Dispesa Total:</span>
            <span data-testid="total-field">{ total }</span>
            <span data-testid="header-currency-field">{ currency }</span>
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
