import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../Layout/Section';
import authOperations from '../redux/auth/auth-operations';
import s from '../base.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const user = { name, email, password };
    dispatch(authOperations.register(user));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Заполните форму">
      <form className={s.form}>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="name">
            Имя
          </label>
          <input
            className={s.input}
            type="Name"
            name="Name"
            id="name"
            value={name}
            placeholder="name"
            onChange={({ target: { value } }) => setName(value)}
          />
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="email">
            Email
          </label>
          <input
            className={s.input}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="password">
            Пароль
          </label>
          <input
            className={s.input}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>
        <button
          className={s.button}
          type="submit"
          onClick={e => handleSubmit(e)}
        >
          Регистрация
        </button>
      </form>
    </Section>
  );
}
