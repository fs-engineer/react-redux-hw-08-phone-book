import axios from 'axios';
import contactsActions from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.massage));
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(contactsActions.addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(contactsActions.addContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactsError(error.massage));
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(contactsActions.deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(contactsActions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error.massage));
  }
};

// export const editContacts = id => async dispatch => {
//   dispatch(editContactsRequest());

//   try {
//     await axios.patch(`/contacts/${id}`);

//     dispatch(editContactsSuccess());
//   } catch (error) {
//     dispatch(editContactsError(error.massage));
//   }
// };
