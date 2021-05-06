import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "utils/theme.js";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Clientes from "components/Clientes";
import Exames from "components/Exames";

const App = () => {
    return (
	<ThemeProvider theme={theme}>
	    <MuiPickersUtilsProvider utils={DateFnsUtils}>
		<Router>
		    <Switch>
			
			<Route path="/clientes">
			    <Clientes/>
			</Route>
			
			<Route path="/agendamentos">
			</Route>
			
			<Route path="/exames">
			    <Exames/>
			</Route>

			<Route>
			</Route>
			
		    </Switch>
		</Router>
	    </MuiPickersUtilsProvider>
	</ThemeProvider>
    );
};

export default App;
