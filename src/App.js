import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "utils/theme.js";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import PageLayout from "components/PageLayout";
import Clientes from "components/Clientes";
import Agendamentos from "components/Agendamentos";
import Exames from "components/Exames";

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
			    
			    <Route>
			    </Route>

			</PageLayout>

		    </Switch>
		</Router>
	    </MuiPickersUtilsProvider>
	</ThemeProvider>
    );
};

export default App;
