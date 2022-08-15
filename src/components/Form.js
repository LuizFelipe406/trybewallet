import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenseAction, updateExpenseAction } from '../actions';
import '../css/Form.css';

const alimentacao = 'Alimentação';

class Form extends React.Component {
  state ={
    description: '',
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: alimentacao,
    editing: true,
  };

  componentDidUpdate() {
    const { editor } = this.props;
    const { editing } = this.state;
    console.log(editing);
    if (editor && editing) {
      this.getCurrentExpense();
    }
  }

  getCurrentExpense = () => {
    const { expenses, idToEdit } = this.props;
    const currentEdit = expenses.find((expense) => expense.id === idToEdit);
    this.setState({ ...currentEdit, editing: false });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick =() => {
    const { saveExpense } = this.props;
    const estado = this.state;
    delete estado.editing;
    saveExpense(estado);
    this.setState({
      description: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      editing: true,
    });
  }

  handleClickEdit = () => {
    const { updateExpense } = this.props;
    const estado = { ...this.state };
    delete estado.editing;
    updateExpense(estado);
    this.setState({
      description: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      editing: true,
    });
  }

  render() {
    const { currencies, editor } = this.props;
    const { description, value, currency, method, tag } = this.state;
    const updateButton = (
      <button
        type="button"
        onClick={ this.handleClickEdit }
        className="btn-expenses"
      >
        Editar despesa
      </button>
    );
    const addButton = (
      <button
        type="button"
        onClick={ this.handleClick }
        className="btn-expenses"
      >
        Adicionar despesa
      </button>
    );
    const addForm = (
      <form className="form-expenses">
        <label htmlFor="description-input" className="expenses-label">
          <span className="label-span">Descrição:</span>
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
        <label htmlFor="value-input" className="expenses-label">
          <span className="label-span">Valor:</span>
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
        <label htmlFor="currency" className="expenses-label">
          <span className="label-span">Moeda:</span>
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
        <label htmlFor="method" className="expenses-label">
          <span className="label-span">Método de Pagamento:</span>
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
        <label htmlFor="tag" className="expenses-label">
          <span className="label-span">Categoria:</span>
          <select
            className="expenses-select"
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value={ alimentacao }>{ alimentacao }</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {
          editor ? updateButton : addButton
        }
      </form>);
    return addForm;
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(saveExpenseAction(expense)),
  updateExpense: (expense) => dispatch(updateExpenseAction(expense)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpense: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
