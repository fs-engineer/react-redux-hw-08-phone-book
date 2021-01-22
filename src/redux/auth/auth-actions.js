import { createActions } from '@reduxjs/toolkit';

export const registrationsRequest = createActions('auth/registrationsRequest');
export const registrationsSuccess = createActions('auth/registrationsSuccess');
export const registrationsError = createActions('auth/registrationsError');

export const loginRequest = createActions('auth/loginRequest');
export const loginSuccess = createActions('auth/loginSuccess');
export const loginError = createActions('auth/loginError');

export const logOutRequest = createActions('auth/logOutRequest');
export const logOutSuccess = createActions('auth/logOutSuccess');
export const logOutError = createActions('auth/logOutError');
