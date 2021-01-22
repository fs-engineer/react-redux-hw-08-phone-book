import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../../Layout/Section';
import authOperations from '../../redux/auth/auth-operations';

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
    <Section title="RegisterView">
      <form>
        <label htmlFor="name">Имя</label>
        <input
          type="Name"
          name="Name"
          id="name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
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
          Регистрация
        </button>
      </form>
    </Section>
  );
}
