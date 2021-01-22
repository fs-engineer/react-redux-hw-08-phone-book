import Navigations from './Navigations';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

export default function AppBar() {
  return (
    <>
      <Navigations />
      <AuthNav />
      <UserMenu />
    </>
  );
}
