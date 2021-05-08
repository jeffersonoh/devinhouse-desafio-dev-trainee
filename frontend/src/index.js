import ReactDOM from "react-dom";
import Routes from "../src/routes";
import { ExamesProvider } from "./context/ExamesContext";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<ExamesProvider>
			<Routes />
		</ExamesProvider>
	</MuiThemeProvider>,
	document.getElementById("root")
);
