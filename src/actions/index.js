// Coloque aqui suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';

export const sendEmailAction = (payload) => ({ type: LOGIN_EMAIL, payload });
export const getCurrencyAction = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      const currencyArray = Object.values(response);
      const filteredArray = currencyArray.filter(
        (currency) => currency.codein !== 'BRLT',
      );
      dispatch({ type: GET_CURRENCY, payload: filteredArray });
    });
};
