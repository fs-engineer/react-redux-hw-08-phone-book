/* eslint-disable import/no-anonymous-default-export */
export const getIsAuthenticated = state => state.auth.token;

export const getUserName = state => state.auth.user.name;
