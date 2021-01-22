import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {
  getContacts,
  getIsLoading,
} from '../../redux/contacts/contacts-selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Section from '../Layout/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Контакты">
      <ContactForm />

      {isLoading ? (
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      ) : null}

      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      ) : null}
    </Section>
  );
}
