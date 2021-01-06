import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Walkthrough } from './components/Walkthrough';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Layout } from '../../components/Layout';

export function Auth() {
  const match = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route path={`${match.path}/terms`}>
          <TermsAndConditions />
        </Route>
        <Route path={`${match.path}/create`}>
          <p>Create wallet</p>
        </Route>
        <Route path={`${match.path}`}>
          <Walkthrough />
        </Route>
      </Switch>
    </Layout>
  );
}
