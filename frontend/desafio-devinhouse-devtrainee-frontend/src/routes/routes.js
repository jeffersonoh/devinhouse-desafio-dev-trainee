import { BrowserRouter, Switch, Route } from "react-router-dom";

import InitialPage from "../pages/InitialPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={InitialPage} />
        <Route path="/cadastro" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
