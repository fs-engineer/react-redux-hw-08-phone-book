import { combineReducers, createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const item = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [contactsActions.editContactsSuccess]: (state, { payload }) => {
    const newState = state.filter(contact => contact.id !== payload.id);
    return [...newState, payload];
  },
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [contactsActions.addContactsRequest]: () => true,
  [contactsActions.addContactsSuccess]: () => false,
  [contactsActions.addContactsError]: () => false,

  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.deleteContactsRequest]: () => true,
  [contactsActions.deleteContactsSuccess]: () => false,
  [contactsActions.deleteContactsError]: () => false,

  [contactsActions.editContactsRequest]: () => true,
  [contactsActions.editContactsSuccess]: () => false,
  [contactsActions.editContactsError]: () => false,
});

export default combineReducers({
  item,
  filter,
  isLoading,
});
