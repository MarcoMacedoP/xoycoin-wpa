import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Auth from 'Views/Auth';
import Transfers from 'Views/Transfers';
import Notifications from 'Views/Notifications';
import Wallet from 'Views/Wallet';

import store from 'Store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>

          <Route path="/transfers">
            <Transfers />
          </Route>
          <Route path="/">
            <Redirect to="/auth" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
