import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenseAction } from '../actions';
import '../css/Form.css';

const alimentacao = 'Alimentação';

class Form extends React.Component {
  state ={
    description: '',
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: alimentacao,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick =() => {
    const { saveExpense } = this.props;
    const estado = this.state;
    saveExpense(estado);
    this.setState({
      description: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    });
  }

  render() {
    const { currencies } = this.props;
    const { description, value, currency, method, tag } = this.state;
    return (
      <form className="form-expenses">
        <label htmlFor="description-input">
          Descrição:
          <input
            className="expenses-input"
            name="description"
            value={ description }
            id="description-input"
            type="text"
            data-testid="description-input"
            onChange={ this.handleChange }
            placeholder="Ex: McDonald's"
          />
        </label>
        <label htmlFor="value-input">
          Valor:
          <input
            className="expenses-input"
            name="value"
            value={ value }
            id="value-input"
            type="text"
            data-testid="value-input"
            onChange={ this.handleChange }
            placeholder="R$ 0,00"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            className="expenses-select"
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
            className="expenses-select payment"
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
            className="expenses-select"
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
        <button
          type="button"
          onClick={ this.handleClick }
          className="btn-expenses"
        >
          Adicionar despesa
        </button>
      </form>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(saveExpenseAction(expense)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
