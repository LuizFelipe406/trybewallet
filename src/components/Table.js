import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenseAction, editExpenseAction } from '../actions';
import '../css/Table.css';

class Table extends React.Component {
  handleClickDelete = (id) => {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  handleClickEdit = (id) => {
    const { editExpense } = this.props;
    editExpense(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Tag</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((exp) => {
              const {
                id, description, value, currency, exchangeRates, method, tag } = exp;
              const currencyName = exchangeRates[currency].name;
              const soma = parseFloat(value) * parseFloat(exchangeRates[currency].ask);
              const correctValue = Math.floor(soma * 100) / 100;
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ parseFloat(value).toFixed(2) }</td>
                  <td>{ currencyName.replace('/Real Brasileiro', '') }</td>
                  <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                  <td>{ correctValue }</td>
                  <td>Real</td>
                  <td>{ method }</td>
                  <td>{ tag }</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      type="button"
                      onClick={ () => this.handleClickEdit(id) }
                    >
                      Editar
                    </button>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => this.handleClickDelete(id) }
                    >
                      Excluir
                    </button>

                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenseAction(id)),
  editExpense: (id) => dispatch(editExpenseAction(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
