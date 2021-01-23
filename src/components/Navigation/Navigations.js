import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

export default function Navigations() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuthenticated && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
