import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  state ={
    description: '',
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    const { description, value, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="description-input">
          Descrição:
          <input
            name="description"
            value={ description }
            id="description-input"
            type="text"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="value-input">
          Valor:
          <input
            name="value"
            value={ value }
            id="value-input"
            type="text"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              currencies.map((curr, i) => (
                <option key={ i } value={ curr }>{ curr }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Form);
