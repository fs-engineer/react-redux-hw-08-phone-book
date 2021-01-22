import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './components/Navigation/AppBar';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import authOperations from './redux/auth/auth-operations';

export default function App({ getUser }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
      </Switch>
    </>
  );
}
