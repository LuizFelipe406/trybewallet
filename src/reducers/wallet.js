// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY,
  SAVE_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_UPDT_EXPENSE } from '../actions';

const initialState = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return ({
      ...state,
      currencies: [...action.payload],
    });
  case SAVE_EXPENSE:
    return ({
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload,
        },
      ],
      editor: false,
    });
  case DELETE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload),
    });
  case EDIT_EXPENSE:
    return ({
      ...state,
      editor: true,
      idToEdit: action.payload,
    });
  case SAVE_UPDT_EXPENSE:
    return ({
      ...state,
      editor: false,
      idToEdit: 0,
      expenses: state.expenses.map(
        (exp) => (exp.id === state.idToEdit ? {
          id: state.idToEdit, ...action.payload, exchangeRates: exp.exchangeRates }
          : exp),
      ),
    });
  default:
    return state;
  }
};

export default wallet;
