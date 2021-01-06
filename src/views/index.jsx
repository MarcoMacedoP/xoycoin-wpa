import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { Auth } from './auth';

export function Views() {
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
