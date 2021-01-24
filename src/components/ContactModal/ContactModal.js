import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContacts } from '../../redux/contacts/contacts-operations';
import s from './ContactModal.module.css';

export default function ContactModal({ contactData, onCloseModal }) {
  const { contact, id } = contactData;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editContacts(id, { name, number }));
    onCloseModal(false);
  };

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <form className={s.form}>
          <div className="inputWrapper">
            <label htmlFor="editName"></label>

            <input
              className="input"
              type="text"
              name="name"
              id="editName"
              value={name}
              placeholder={contact.name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="editNumber"></label>
            <input
              className="input"
              type="tel"
              name="number"
              id="editNamber"
              value={number}
              placeholder={contact.number}
              onChange={({ target: { value } }) => setNumber(value)}
            />
          </div>
          <div className={s.controls}>
            <button
              className="button"
              type="button"
              onClick={() => onCloseModal(false)}
            >
              Закрыть
            </button>
            <button className="button" type="button" onClick={handleSave}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
