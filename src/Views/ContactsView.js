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
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editContact, setEditContact] = useState({});

  const handleOpenModal = (contact, id) => {
    setIsOpenModal(true);
    setEditContact({ contact, id });
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
          {isOpenModal && (
            <ContactModal
              onCloseModal={setIsOpenModal}
              contactData={editContact}
            />
          )}
        </Section>
      ) : null}
    </Section>
  );
}
