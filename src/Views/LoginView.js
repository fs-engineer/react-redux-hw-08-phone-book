import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../Layout/Section';
import authOperations from '../redux/auth/auth-operations';
import s from '../base.module.css';

export default function LoginViews() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Section title="Вход в аккаунт">
      <div className={s.wrapper}>
        <form className={s.form}>
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor="email">
              {/* email */}
            </label>
            <input
              className={s.input}
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="email"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor="password">
              {/* пароль */}
            </label>
            <input
              className={s.input}
              type="password"
              name="password"
              id="password"
              value={password}
              minLength="7"
              placeholder="пароль"
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </div>
          <button
            className={s.button}
            type="submit"
            onClick={e => handleSubmit(e)}
          >
            Войти
          </button>
        </form>
      </div>
    </Section>
  );
}
