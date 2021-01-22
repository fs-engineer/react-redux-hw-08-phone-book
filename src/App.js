import { Switch, Route } from 'react-router-dom';

import AppBar from './components/Navigation/AppBar';
import HomeView from './components/Views/HomeView';
import ContactsView from './components/Views/ContactsView';
import LoginView from './components/Views/LoginView';
import RegisterView from './components/Views/RegisterView';

export default function App() {
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
