import NavLink from 'react-router-dom';

export default function Navigations() {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </nav>
  );
}
