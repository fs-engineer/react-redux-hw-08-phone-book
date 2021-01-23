import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { IoHome } from 'react-icons/io5';
import s from './Navigations.module.css';

export default function Navigations() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink className={s.link} to="/">
        <IoHome size="20" />
      </NavLink>
      {isAuthenticated && (
        <NavLink className={s.link} to="/contacts">
          Контакты
        </NavLink>
      )}
    </nav>
  );
}
