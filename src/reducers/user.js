// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_EMAIL:
    return ({
      email: action.payload,
    });
  default:
    return state;
  }
};

export default user;
