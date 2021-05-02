import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes/routes";
import GlobalStyles from "./styles/GlobalStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ToastContainer />
      {routes.map((route, index) => (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <GlobalStyles />
    </BrowserRouter>      
  )
}

export default App;