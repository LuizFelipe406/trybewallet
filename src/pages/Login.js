import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendEmailAction } from '../actions';
import '../css/Login.css';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isLogin: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { email } = this.state;
    const { sendEmail } = this.props;
    sendEmail(email);
    this.setState({ isLogin: true });
  }

  render() {
    const { email, senha, isLogin } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const minPasswordLength = 6;
    const isValid = !((emailRegex.test(email) && senha.length >= minPasswordLength));
    return (
      <div className="page">
        <form className="login-form">
          <div className="login-title">
            <h1>
              TrybeWallet
            </h1>
            <span className="material-symbols-outlined wallet-icon">
              account_balance_wallet
            </span>
          </div>
          <input
            className="input"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            minLength="6"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
          <button
            className="button"
            type="button"
            onClick={ this.handleClick }
            disabled={ isValid }
            style={ { backgroundColor: isValid ? 'grey' : 'cornflowerBlue' } }
          >
            Entrar
          </button>
        </form>
        { isLogin && <Redirect to="/carteira" />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(sendEmailAction(email)),
});

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
