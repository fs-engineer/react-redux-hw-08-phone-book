import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getIsAdded } from '../../redux/contacts/contacts-selectors';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone: number, email }));
    }

    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <div className="inputWrapper">
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="имя"
            onChange={e => setName(e.target.value)}
          />
          <label
            className={name ? 'labelRight' : 'label'}
            htmlFor="name"
          ></label>
        </div>
        <div className="inputWrapper">
          <label
            className={number ? 'labelRight' : 'label'}
            htmlFor="email"
          ></label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="inputWrapper">
          <label
            className={number ? 'labelRight' : 'label'}
            htmlFor="phone"
          ></label>
          <input
            className="input"
            type="tel"
            name="number"
            id="number"
            value={number}
            placeholder="Номер телефона"
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <button className="button" type="submit" disabled={!(name && number)}>
          Добавить
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
