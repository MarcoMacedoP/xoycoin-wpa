import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Balance from './Components/Balance';
import CurrencyDetails from './Components/CurrencyDetails';
import Send from './Components/Send';
import SetQuantity from './Components/SetQuantity';
import Found from './Components/Found';
import ConfirmTransaction from './Components/ConfirmTransaction';
import StatusTransaction from './Components/StatusTransaction';

function Transfers() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/set-quantity`}>
        <SetQuantity />
      </Route>
      <Route path={`${match.path}/confirm`}>
        <ConfirmTransaction />
      </Route>
      <Route path={`${match.path}/send`}>
        <Send />
      </Route>
      <Route path={`${match.path}/found`}>
        <Found />
      </Route>
      <Route path={`${match.path}/status`}>
        <StatusTransaction />
      </Route>

      <Route path={`${match.path}/currency`}>
        <CurrencyDetails />
      </Route>
      <Route path={`${match.path}`}>
        <Balance />
      </Route>
    </Switch>
  );
}

export default Transfers;
