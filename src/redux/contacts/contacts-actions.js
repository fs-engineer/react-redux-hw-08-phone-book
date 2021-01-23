import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contacts/changeFilter');

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
const deleteContactsError = createAction('contacts/deleteContactsError');

const editContactsRequest = createAction('contacts/editContactsRequest');
const editContactsSuccess = createAction('contacts/editContactsSuccess');
const editContactsError = createAction('contacts/editContactsError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  editContactsRequest,
  editContactsSuccess,
  editContactsError,
  changeFilter,
};
