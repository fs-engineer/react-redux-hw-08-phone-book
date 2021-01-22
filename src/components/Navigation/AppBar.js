import Navigations from './Navigations';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <>
      <Navigations />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </>
  );
}
