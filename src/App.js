import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "utils/theme.js";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { Typography } from "@material-ui/core";

import PageLayout from "components/PageLayout";
import Clientes from "components/pageContent/Clientes";
import Agendamentos from "components/pageContent/Agendamentos";
import Exames from "components/pageContent/Exames";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
	<Router>
	  <Switch>
	    
	    <PageLayout>
	      
	      <Route path="/clientes">
		<Clientes/>
	      </Route>
	      
	      <Route path="/agendamentos">
		<Agendamentos/>
	      </Route>
	      
	      <Route path="/exames">
		<Exames/>
	      </Route>
	      
	      <Route path="/" exact>
	  	<Typography variant="h4">
	  	  Bem-vindo à página de controle e consulta de cadastros, exames e agendamentos de nosso hospital.
	  	</Typography>
	      </Route>
	      
	    </PageLayout>
	    
	  </Switch>
	</Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
