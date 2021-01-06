import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Walkthrough } from './components/Walkthrough';
import { SetPassword } from './components/SetPassword';
import { TermsAndConditions } from './components/TermsAndConditions';
import { ImportWallet } from './components/ImportWallet';
import { Layout } from '../../components/Layout';

export function Auth() {
  const match = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route path={`${match.path}/terms`}>
          <TermsAndConditions />
        </Route>
        <Route path={`${match.path}/password-set`}>
          <SetPassword />
        </Route>
        <Route path={`${match.path}/import`}>
          <ImportWallet />
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
