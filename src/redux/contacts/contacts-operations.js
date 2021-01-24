import axios from 'axios';
import contactsActions from './contacts-actions';
import { infoNotify, warnNotify } from '../../services/tostify';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.massage));
    warnNotify(error.message);
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(contactsActions.addContactsRequest());
  infoNotify('Запись добавлена');

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(contactsActions.addContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactsError(error.massage));
    warnNotify(error.message);
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(contactsActions.deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(contactsActions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error.massage));
    warnNotify(error.message);
  }
};

export const editContacts = (id, update) => async dispatch => {
  dispatch(contactsActions.editContactsRequest());

  try {
    const { data } = await axios.patch(`/contacts/${id}`, update);
    console.log(data);
    dispatch(contactsActions.editContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.editContactsError(error.massage));
    warnNotify(error.message);
  }
};
