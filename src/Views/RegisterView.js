import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { warnNotify } from '../services/tostify';
import Section from '../Layout/Section';
import authOperations from '../redux/auth/auth-operations';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== checkPass) {
      warnNotify('Пароли не совпадают');
      return;
    }

    const user = { name, email, password };
    dispatch(authOperations.register(user));

    setName('');
    setEmail('');
    setPassword('');
    setCheckPass('');
  };

  return (
    <Section title="Заполните форму">
      <form className="form">
        <div className="inputWrapper">
          <label className="label" htmlFor="name"></label>
          <input
            className="input"
            type="Name"
            name="Name"
            id="name"
            value={name}
            placeholder="имя"
            onChange={({ target: { value } }) => setName(value)}
          />
        </div>
        <div className="inputWrapper">
          <label className="label" htmlFor="email"></label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </div>
        <div className="inputWrapper">
          <label className="label" htmlFor="password"></label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="пароль"
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>
        <div className="inputWrapper">
          <label className="label" htmlFor="password"></label>
          <input
            className="input"
            type="password"
            name="checkPassword"
            id="checkPassword"
            value={checkPass}
            placeholder="подтвердите пароль"
            onChange={({ target: { value } }) => setCheckPass(value)}
          />
        </div>
        <button className="button" type="submit" onClick={e => handleSubmit(e)}>
          Регистрация
        </button>
      </form>
    </Section>
  );
}
