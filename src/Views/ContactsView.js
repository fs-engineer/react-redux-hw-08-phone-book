import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import {
  getContacts,
  getIsLoading,
} from '../redux/contacts/contacts-selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Section from '../Layout/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import ContactModal from '../components/ContactModal/ContactModal';

export default function ContactsView() {
  const [isOpen, setIsOpen] = useState(false);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const handleOpenModal = id => {
    console.log(id);
    const contact = contacts.filter(contact => contact.id === id);
    console.log(contact);
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Введите имя и номер">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading ? (
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        ) : null}
      </div>

      <ContactForm />

      {contacts.length ? (
        <Section title="Контакты">
          <Filter />
          <ContactsList onOpenModal={handleOpenModal} />
          {isOpen && <ContactModal onIsOpen={setIsOpen} />}
        </Section>
      ) : null}
    </Section>
  );
}
