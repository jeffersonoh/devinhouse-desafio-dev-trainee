import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
	<Router>
	    <Switch>
		<Route>
		    <div>huzzah!</div>
		</Route>
	    </Switch>
	</Router>
    );
}

export default App;
