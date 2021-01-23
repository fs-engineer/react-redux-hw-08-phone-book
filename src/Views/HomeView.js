import { NavLink } from 'react-router-dom';
import Section from '../Layout/Section';
import { SiAdobephonegap } from 'react-icons/si';
import Container from '../Layout/Container';
import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <Container>
      <Section className={s.section}>
        <div className={s.wrapper}>
          <h1 className={s.title}>Добро пожаловать!</h1>
          <NavLink className={s.link} to="/register">
            <SiAdobephonegap size="100" className={s.phone} />
          </NavLink>

          <p className={s.description}>
            Это приложение для записи и хранения телефонных номеров ваших друзей
            и знакомых
          </p>
        </div>
      </Section>
    </Container>
  );
}
