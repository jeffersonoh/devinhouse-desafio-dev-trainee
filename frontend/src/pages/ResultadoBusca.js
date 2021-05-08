import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { api } from "../services/api";
import { makeStyles } from "@material-ui/core/styles";
import CardCliente from "../components/CardCliente";
import { Snackbar } from "@material-ui/core";
import { Alert } from "../utils/index";

const useStyles = makeStyles((theme) => ({
	resultado: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: theme.spacing(3),
	},
}));

function ResultadoBusca() {
	const history = useHistory();
	const location = useLocation().search;
	const classes = useStyles();

	const cpf = new URLSearchParams(location).get("cpf");

	const [resultadoBusca, setResultadoBusca] = useState({});

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (cpf) buscarCPF();
	}, [cpf]);

	const buscarCPF = async () => {
		const response = await api
			.buscarClientePeloCPF(cpf)
			.then((response) => response)
			.catch((error) => error.response);
		// console.log(response);

		const status = response?.status;

		if (!status) {
			setMessage("O servidor não respondeu a solicitação.");
		} else if (status !== 200) {
			setMessage(response.data.message);
			setOpen(true);
		} else {
			setResultadoBusca(response.data);
		}
	};

	return (
		<>
			<div className={classes.resultado}>
				{resultadoBusca?.id && <CardCliente cliente={resultadoBusca} />}
			</div>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={() => {
					setOpen(false);
					history.push("/");
				}}
			>
				<Alert severity="info">{message}</Alert>
			</Snackbar>
		</>
	);
}

export default ResultadoBusca;
