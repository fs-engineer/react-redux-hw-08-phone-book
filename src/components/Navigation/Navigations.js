import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { IoHome } from 'react-icons/io5';
import { ImListNumbered } from 'react-icons/im';
import s from './Navigations.module.css';

export default function Navigations() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const screenWidth = window.innerWidth;

  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/">
        <IoHome size="20" />
      </NavLink>
      {isAuthenticated && (
        <NavLink className={s.link} to="/contacts">
          {screenWidth <= 767 ? <ImListNumbered /> : 'Контакты'}
        </NavLink>
      )}
    </nav>
  );
}
