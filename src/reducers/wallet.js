// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY, SAVE_EXPENSE, DELETE_EXPENSE } from '../actions';

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
    });
  case DELETE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload),
    });
  default:
    return state;
  }
};

export default wallet;
