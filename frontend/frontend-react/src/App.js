import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginProvider } from "./utils/contextLogin";
import { HomePage } from "./pages/HomePage";
import { AreaAdmin } from "./pages/AreaAdmin";
import { AreaPrincipalCliente } from "./pages/AreaCliente";

function App() {
  return (
    <Router>
      <LoginProvider>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/area-cliente">
            <AreaPrincipalCliente />
          </Route>
          <Route exact path="/area-admin">
            <AreaAdmin />
          </Route>
        </Switch>
      </LoginProvider>
    </Router>
  );
}
export default App;
