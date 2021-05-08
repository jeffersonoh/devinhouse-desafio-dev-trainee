import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import { Home, CadastroCliente, CadastroConsulta, ResultadoBusca } from "../pages";

function Routes() {
	const routes = [
		{
			path: "/clientes/buscar",
			component: ResultadoBusca,
			exact: true,
		},
		{
			path: "/clientes/novo",
			component: CadastroCliente,
			exact: true,
		},
		{
			path: "/clientes/:id?",
			component: CadastroCliente,
			exact: true,
		},
		{
			path: "/clientes/:idCliente/consulta/:idConsulta?",
			component: CadastroConsulta,
			exact: true,
		},
		{
			path: "/",
			component: Home,
			exact: false,
		},
	];

	return (
		<Router>
			<Header />

			<Switch>
				{routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						component={route.component}
						exact={route.exact}
					/>
				))}
			</Switch>
		</Router>
	);
}

export default Routes;
