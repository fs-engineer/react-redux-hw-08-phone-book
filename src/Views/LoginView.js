import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../Layout/Section';
import authOperations from '../redux/auth/auth-operations';

export default function LoginViews() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Section title="LoginView">
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <button type="submit" onClick={e => handleSubmit(e)}>
          Войти
        </button>
      </form>
    </Section>
  );
}
