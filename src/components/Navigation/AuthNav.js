import { NavLink } from 'react-router-dom';
import s from './Navigations.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink className={s.link} to="/register">
        Регистрация
      </NavLink>
      <NavLink className={s.link} to="/login">
        Войти
      </NavLink>
    </>
  );
}
