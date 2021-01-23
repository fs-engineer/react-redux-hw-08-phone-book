import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.logInSuccess]: (_, { payload }) => payload.user,
  [authActions.logOutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.logInError]: setError,
  [authActions.logOutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.logInSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.logOutSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.logInError]: () => false,
  [authActions.logOutError]: () => true,
  [authActions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
