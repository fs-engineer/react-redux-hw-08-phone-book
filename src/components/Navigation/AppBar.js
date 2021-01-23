import Navigations from './Navigations';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import s from './Navigations.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header className={s.header}>
      <Navigations />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
