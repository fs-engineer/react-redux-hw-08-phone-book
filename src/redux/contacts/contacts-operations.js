import axios from 'axios';
import contactsActions from './contacts-actions';
import { infoNotify, warnNotify } from '../../services/tostify';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const {
      data: {
        data: { contacts },
      },
    } = await axios.get('/contacts');

    if (!contacts) {
      throw new Error('Problem with contacts fetch');
    }

    const { docs } = contacts;
    const destructedContacts = docs.map(({ name, email, phone, _id }) => ({
      name,
      email,
      phone,
      id: _id,
    }));

    dispatch(contactsActions.fetchContactsSuccess(destructedContacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.massage));
    warnNotify(error.message);
  }
};

export const addContact = ({ name, phone, email }) => async dispatch => {
  dispatch(contactsActions.addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', { name, phone, email });
    const { contact } = data;

    dispatch(contactsActions.addContactsSuccess(contact));
    infoNotify('Запись добавлена');
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
    const { name, email, phone } = data.contact;

    dispatch(contactsActions.editContactsSuccess({ name, email, phone, id }));
  } catch (error) {
    dispatch(contactsActions.editContactsError(error.massage));
    warnNotify(error.message);
  }
};
