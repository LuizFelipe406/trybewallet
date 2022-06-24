// Coloque aqui suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const sendEmailAction = (payload) => ({ type: LOGIN_EMAIL, payload });
export const getCurrencyAction = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      const currencyArray = Object.values(response);
      const filteredArray = currencyArray.filter(
        (currency) => currency.codein !== 'BRLT',
      ).map((currency) => currency.code);
      dispatch({ type: GET_CURRENCY, payload: filteredArray });
    });
};

export const saveExpenseAction = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      delete response.USDT;
      const expenseObject = {
        ...expense,
        exchangeRates: response,
      };
      dispatch({ type: SAVE_EXPENSE, payload: expenseObject });
    });
};

export const deleteExpenseAction = (id) => ({ type: DELETE_EXPENSE, payload: id });
