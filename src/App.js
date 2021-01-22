import { Switch, Route } from 'react-router-dom';

import AppBar from './components/Navigation/AppBar';
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';

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
