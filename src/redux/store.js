import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: contactsReducer, auth: authReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
