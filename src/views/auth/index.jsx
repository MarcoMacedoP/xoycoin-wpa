import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from 'Components/Layout';
import Walkthrough from './Components/Walkthrough';
import SetPassword from './Components/SetPassword';
import TermsAndConditions from './Components/TermsAndConditions';
import ImportWallet from './Components/ImportWallet';
import CreateWallet from './Components/CreateWallet';
import LoadingWallet from './Components/LoadingWallet';

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
          <CreateWallet />
        </Route>
        <Route path={`${match.path}/loading`}>
          <LoadingWallet />
        </Route>
        <Route path={`${match.path}`}>
          <Walkthrough />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Auth;
