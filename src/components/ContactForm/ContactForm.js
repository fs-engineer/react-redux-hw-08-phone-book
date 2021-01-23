import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
// import s from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getIsAdded } from '../../redux/contacts/contacts-selectors';
import s from '../../base.module.css';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <div className={s.inputWrapper}>
          <input
            className={s.input}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label className={name ? s.labelRight : s.label} htmlFor="name">
            Имя
          </label>
        </div>
        <div className={s.inputWrapper}>
          <label className={number ? s.labelRight : s.label} htmlFor="phone">
            Номер телефона
          </label>
          <input
            className={s.input}
            type="tel"
            name="number"
            id="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <button className={s.button} type="submit" disabled={!(name && number)}>
          Добавить
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
