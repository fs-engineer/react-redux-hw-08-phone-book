import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './components/Navigation/AppBar';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Container from './Layout/Container';
import './services/tostify';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
            component={LoginView}
          />
          <PublicRoute
            path="/register"
            redirectTo="/contacts"
            restricted
            component={RegisterView}
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Container>
    </>
  );
}
