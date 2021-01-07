import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from 'Components/Layout';
import Walkthrough from './Components/Walkthrough';
import SetPassword from './Components/SetPassword';
import TermsAndConditions from './Components/TermsAndConditions';
import ImportWallet from './Components/ImportWallet';

function Auth() {
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

export default Auth;
