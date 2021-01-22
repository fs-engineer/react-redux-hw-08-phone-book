import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = () => {};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.logInRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    dispatch(authActions.logInSuccess(data));
  } catch (error) {
    dispatch(authActions.logInError(error.message));
    console.log(error.message);
  }
};

const logOut = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

const authOperations = {
  register,
  token,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
