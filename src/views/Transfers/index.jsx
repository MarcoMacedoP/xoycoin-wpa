import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from 'Components/Layout';
import Balance from './Components/Balance';
import CurrencyDetails from './Components/CurrencyDetails';
import Send from './Components/Send';
import SetQuantity from './Components/SetQuantity';

function Transfers() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/set-quantity`}>
        <Layout>
          <SetQuantity />
        </Layout>
      </Route>
      <Route path={`${match.path}/send`}>
        <Layout>
          <Send />
        </Layout>
      </Route>
      <Route path={`${match.path}/currency`}>
        <Layout>
          <CurrencyDetails />
        </Layout>
      </Route>
      <Route path={`${match.path}`}>
        <Balance />
      </Route>
    </Switch>
  );
}

export default Transfers;
