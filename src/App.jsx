import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Auth from 'Views/Auth';
import Transfers from 'Views/Transfers';

function App() {
  return (
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
  );
}
export default App;
