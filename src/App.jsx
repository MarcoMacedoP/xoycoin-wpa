import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Auth from 'Views/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Redirect to="/auth" />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
