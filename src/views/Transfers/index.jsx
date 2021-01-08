import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Balance from './Components/Balance';

function Transfers() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <Balance />
      </Route>
    </Switch>
  );
}

export default Transfers;
