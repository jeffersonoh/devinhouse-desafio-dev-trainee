import { useEffect, useState } from "react";
import { api } from "../services/api";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import CardCliente from "../components/CardCliente";

const useStyles = makeStyles((theme) => ({
	listagem: {
		margin: theme.spacing(3, 0, 6),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	skeleton: {
		margin: theme.spacing(1, 0),
		maxWidth: "90vw",
		width: "90vw",
	},
}));

function Home() {
	const classes = useStyles();
	const [clientes, setClientes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		buscarClientes();
	}, []);

	const buscarClientes = async () => {
		const response = await api
			.buscarClientes()
			.then((response) => response)
			.catch((error) => error?.response);
		// console.log(response);

		if (response?.status === 200) {
			setClientes(response.data);
		}

		setLoading(false);
	};

	return (
		<div className={classes.listagem}>
			{loading ? (
				<>
					<Skeleton className={classes.skeleton} variant="rect" height={80} />
					<Skeleton className={classes.skeleton} variant="rect" height={80} />
					<Skeleton className={classes.skeleton} variant="rect" height={80} />
					<Skeleton className={classes.skeleton} variant="rect" height={80} />
					<Skeleton className={classes.skeleton} variant="rect" height={80} />
				</>
			) : clientes?.length === 0 ? (
				<p>Nenhum cliente encontrado.</p>
			) : (
				clientes.map((cliente) => <CardCliente key={cliente.id} cliente={cliente} />)
			)}
		</div>
	);
}

export default Home;
