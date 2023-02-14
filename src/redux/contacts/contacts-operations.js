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

    console.log(contacts);

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
  const contact = { name, phone, email };
  dispatch(contactsActions.addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    console.log(data);

    dispatch(contactsActions.addContactsSuccess(data));
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
    console.log(data);
    dispatch(contactsActions.editContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.editContactsError(error.massage));
    warnNotify(error.message);
  }
};
