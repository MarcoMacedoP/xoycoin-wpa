import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Auth from 'Views/Auth';
import Transfers from 'Views/Transfers';
import store from 'Store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth />
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
