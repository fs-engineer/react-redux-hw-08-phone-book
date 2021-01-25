import { Switch, Route } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './components/Navigation/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Loader from 'react-loader-spinner';
import Container from './Layout/Container';
import './services/tostify';

const HomeView = React.lazy(() => import('./Views/HomeView'));
const ContactsView = React.lazy(() => import('./Views/ContactsView'));
const LoginView = React.lazy(() => import('./Views/LoginView'));
const RegisterView = React.lazy(() => import('./Views/RegisterView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Loader type="Rings" color="#00BFFF" height={80} width={80} />
            </div>
          }
        >
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
        </Suspense>
      </Container>
    </>
  );
}
