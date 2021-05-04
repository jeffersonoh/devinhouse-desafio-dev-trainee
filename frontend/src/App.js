import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LoginProvider } from "./utils/login.context";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <LoginProvider>
        <Header />

        <Switch>

          <Route path="/">
            <HomePage />
          </Route>
          
        </Switch>

      </LoginProvider>
    </Router>
  );
}

export default App;
