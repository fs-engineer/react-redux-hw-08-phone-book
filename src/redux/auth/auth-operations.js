import axios from 'axios';
import authActions from './auth-actions';
import { infoNotify, warnNotify } from '../../services/tostify';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:5050';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const options = {
//   headers: {
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   }
// }

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/auth/register', credentials);
    // const { data } = await axios.post('/users/auth/register', {
    //   email: 'vad.evlanov@gmail.com',
    //   password: 'vad123',
    // });

    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    warnNotify(error.message);
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.logInRequest());

  try {
    const { data } = await axios.post('/users/auth/login', credentials);
    const { ResponseBody } = data;

    token.set(ResponseBody?.token);
    dispatch(authActions.logInSuccess(ResponseBody));
    infoNotify('Добро пожаловать');
  } catch (error) {
    dispatch(authActions.logInError(error.message));
    warnNotify(error.message);
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logOutRequest());

  try {
    await axios.post('/users/auth/logout');

    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
    warnNotify(error.message);
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/auth/current');
    const { ResponseBody } = data;

    dispatch(authActions.getCurrentUserSuccess(ResponseBody));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    // warnNotify(error.message);
  }
};

const authOperations = {
  token,
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
