import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Exames from "components/Exames";

const App = () => {
    return (
	<>
	    <Router>
		<Switch>

		    <Route path="/clientes">
		    </Route>

		    <Route path="/agendamentos">
		    </Route>

		    <Route path="/exames">
			<Exames/>
		    </Route>

		    <Route>
			<div>~fallback page~</div>
		    </Route>

		</Switch>
	    </Router>
	</>
    );
};

export default App;
